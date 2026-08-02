'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, CheckCircle2, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mapsModalOpen, setMapsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    celebrationType: 'Weddings',
    eventDate: '',
    guestCount: '150-300',
    budgetRange: 'Royal Tier (₹1.5L - ₹3L)',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage((err as Error)?.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">

        <SectionHeader
          scriptEyebrow="Est. 2018 in Kakinada"
          title="Contact & Studio Details"
          description="Visit our studio in Jagannaickpur, Kakinada (near Netaji Park) or call our event team."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Studio Contact Details */}
          <div className="lg:col-span-5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl p-8 space-y-8">
            <div>
              <EditorialBadge variant="gold">Hanvi Events Studio • Kakinada</EditorialBadge>
              <h2 className="font-serif-editorial text-3xl text-[#34281F] font-normal mt-2">
                Get In Touch
              </h2>
              <p className="font-sans-narrative text-xs md:text-sm text-[#6E5D4F] mt-2">
                We answer all inquiries within 24 hours. For urgent availability checks, call or WhatsApp directly.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans-narrative text-[#34281F]">
              <div className="flex items-start space-x-3 p-4 bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl">
                <MapPin className="w-5 h-5 text-[#B88A44] shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#B88A44] font-semibold block">Studio Address</span>
                  <span className="font-medium text-sm block mt-0.5">{siteConfig.address}</span>
                  <button
                    onClick={() => setMapsModalOpen(true)}
                    className="text-[11px] text-[#B88A44] font-semibold underline mt-1 block cursor-pointer"
                  >
                    View Interactive Google Maps →
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl">
                <Phone className="w-5 h-5 text-[#B88A44] shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#B88A44] font-semibold block">Phone Lines</span>
                  <div className="flex flex-col space-y-1 mt-0.5">
                    <a href="tel:+919700929650" className="font-medium text-sm hover:text-[#B88A44]">
                      +91 97009 29650 (Primary)
                    </a>
                    <a href="tel:+916305457612" className="font-medium text-sm hover:text-[#B88A44]">
                      +91 63054 57612 (WhatsApp / Support)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl">
                <MessageCircle className="w-5 h-5 text-[#59624C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#59624C] font-semibold block">WhatsApp Direct</span>
                  <a href={siteConfig.social.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:underline">
                    Chat with Hanvi Team (+91 63054 57612)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl">
                <Mail className="w-5 h-5 text-[#B88A44] shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#B88A44] font-semibold block">Email Studio</span>
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-sm hover:text-[#B88A44]">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-8 md:p-10 shadow-hover">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-editorial text-3xl text-[#34281F] font-normal mb-6">
                  Reserve Your Date
                </h3>

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl font-sans-narrative text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] mb-1.5 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Swathi Varma"
                      className="w-full px-4 py-3 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] mb-1.5 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 97009 29650"
                      className="w-full px-4 py-3 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] mb-1.5 font-medium">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="swathi@example.com"
                      className="w-full px-4 py-3 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] mb-1.5 font-medium">Celebration Type</label>
                    <select
                      value={formData.celebrationType}
                      onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    >
                      <option value="Weddings">Weddings & Mandap</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Mehendi & Sangeet">Mehendi & Sangeet</option>
                      <option value="Birthdays">Birthdays & Balloon Decor</option>
                      <option value="Half Saree">Half Saree & Langa Voni</option>
                      <option value="Baby Shower">Baby Shower / Seemantham</option>
                      <option value="Housewarming">Housewarming</option>
                      <option value="Corporate">Corporate Gala & Catering Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] mb-1.5 font-medium">Target Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                  />
                </div>

                <div>
                  <label className="block font-sans-ui text-[11px] uppercase tracking-wider text-[#34281F] mb-1.5 font-medium">Vision Notes</label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about preferred venue location in Kakinada/Vizag/AP, guest count, and decor theme..."
                    className="w-full px-4 py-3 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                  />
                </div>

                <div className="pt-4">
                  <EditorialButton type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                      </span>
                    ) : (
                      'Submit Reservation Inquiry'
                    )}
                  </EditorialButton>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-[#59624C] mx-auto mb-3" />
                <h3 className="font-serif-editorial text-3xl text-[#34281F]">Inquiry Received</h3>
                <p className="font-sans-narrative text-sm text-[#6E5D4F] my-3">
                  Thank you! Event Director Ch. Kala Prasad & team will contact you within 24 hours.
                </p>
                <EditorialButton variant="ghost" onClick={() => setSubmitted(false)}>
                  Send Another Inquiry
                </EditorialButton>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Google Maps Modal */}
      {mapsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-[#FCF9F5] rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif-editorial text-2xl text-[#34281F]">Hanvi Events Studio — Kakinada</h3>
                <p className="font-sans-narrative text-xs text-[#6E5D4F]">Jagannaickpur, near Netaji Park, Kakinada - 533002</p>
              </div>
              <button onClick={() => setMapsModalOpen(false)} className="px-3 py-1 bg-[#F5ECDD] text-xs font-sans-ui uppercase rounded-full cursor-pointer">Close</button>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#F5ECDD]">
              <iframe
                title="Hanvi Events Kakinada Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.62354784777!2d82.23512322256424!3d16.945538318856272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38280000000001%3A0x6b876402434e320!2sJagannaickpur%2C%20Kakinada%2C%20Andhra%20Pradesh%20533002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
