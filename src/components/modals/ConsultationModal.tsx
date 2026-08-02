'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, CheckCircle2, MessageCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    celebrationType: 'Marriage & Wedding',
    eventDate: '',
    guestCount: '150-300',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      // 1. Submit to Server API (/api/contact)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage((err as Error)?.message || 'Something went wrong. You can also contact via WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct WhatsApp message link generator to Ch. Kala Prasad (+91 63054 57612)
  const getWhatsAppUrl = () => {
    const cleanPhone = siteConfig?.phoneNumbers?.[1]?.raw?.replace(/[^0-9]/g, '') || '916305457612';
    const message = `Hello Ch. Kala Prasad (Hanvi Events),

I would like to book an event consultation.

Name: ${formData.name || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Function Type: ${formData.celebrationType}
Target Event Date: ${formData.eventDate || 'To be decided'}
Requirements: ${formData.notes || 'None specified'}

Please contact me regarding planning. Thank you!`;

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#34281F]/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-6"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6E5D4F] hover:bg-[#F5ECDD]"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="text-center mb-5">
                  <EditorialBadge variant="gold">Managed by Ch. Kala Prasad</EditorialBadge>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-1">
                    Book Event Consultation
                  </h3>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                    Direct planning with Hanvi Events • Kakinada Studio
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-sans-narrative">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-sans-ui text-[10px] uppercase tracking-wider text-[#34281F] mb-1 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ch. Prasad"
                        className="w-full px-3.5 py-2.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                      />
                    </div>
                    <div>
                      <label className="block font-sans-ui text-[10px] uppercase tracking-wider text-[#34281F] mb-1 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9700929650"
                        className="w-full px-3.5 py-2.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-sans-ui text-[10px] uppercase tracking-wider text-[#34281F] mb-1 font-medium">Function / Event Type</label>
                      <select
                        value={formData.celebrationType}
                        onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                      >
                        <option value="Marriage & Wedding">Marriage & Mandap</option>
                        <option value="Sangeet & Mehendi">Sangeet, Mehandi & Nail-Art</option>
                        <option value="Birthday Parties">Birthday Parties & Balloons</option>
                        <option value="Cradle Ceremony">Cradle Ceremony & Naming</option>
                        <option value="Surprise Events">Surprise Events & Anniversary</option>
                        <option value="Get Together">Get Together Parties</option>
                        <option value="Corporate">Corporate & Stage Decor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans-ui text-[10px] uppercase tracking-wider text-[#34281F] mb-1 font-medium">Target Event Date</label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans-ui text-[10px] uppercase tracking-wider text-[#34281F] mb-1 font-medium">Event Requirements / Venue Notes</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify welcome girls, nail-art stalls, floral theme, or venue location..."
                      className="w-full px-3.5 py-2.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs text-[#34281F] focus:outline-none focus:border-[#B88A44]"
                    />
                  </div>

                  <div className="pt-2">
                    <EditorialButton type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                        </span>
                      ) : (
                        'Submit Consultation Request'
                      )}
                    </EditorialButton>
                  </div>
                </form>

                {/* Direct Phone & WhatsApp Call Options */}
                <div className="mt-4 pt-3 border-t border-[#E8DDCD] text-center space-y-2">
                  <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F]">Or Reach Ch. Kala Prasad Directly:</span>
                  <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold text-[#B88A44]">
                    <a href="tel:+919700929650" className="hover:underline">97009 29650</a>
                    <span>•</span>
                    <a href="tel:+916305457612" className="hover:underline">63054 57612</a>
                    <span>•</span>
                    <a href="tel:+918374527954" className="hover:underline">83745 27954</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#59624C] mx-auto" />
                <h3 className="font-serif-editorial text-2xl text-[#34281F]">Inquiry Registered Successfully</h3>
                <p className="font-sans-narrative text-xs text-[#6E5D4F] max-w-sm mx-auto">
                  Thank you! Your event consultation details have been sent to Event Manager Ch. Kala Prasad.
                </p>

                {/* Option to send directly via WhatsApp */}
                <div className="pt-2 space-y-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white font-sans-ui text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Message Directly via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="text-xs font-sans-ui text-[#6E5D4F] underline hover:text-[#34281F]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
