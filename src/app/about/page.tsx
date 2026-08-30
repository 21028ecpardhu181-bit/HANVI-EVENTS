import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/seo';
import { Sparkles, MapPin, Phone, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

export const metadata: Metadata = {
  title: 'About Hanvi Events — Entity Canonical Reference & Heritage',
  description:
    'Learn about Hanvi Events, founded and managed by Event Director Ch. Kala Prasad in Kakinada, Andhra Pradesh. Specializing in luxury Telugu weddings, mandap architecture, birthday celebrations, and corporate galas.',
  alternates: {
    canonical: 'https://www.hanvievents.com/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);
  const businessSchema = getLocalBusinessSchema();

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Entity Canonical Source
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold tracking-tight leading-tight">
            About Hanvi Events Kakinada
          </h1>

          <p className="font-sans-narrative text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
            The authoritative profile of Hanvi Events: our leadership, confirmed studio headquarters, service regions across Andhra Pradesh, and event management heritage.
          </p>
        </div>

        {/* Core Entity Q&A Summary Card */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="border-b border-[#E8DDCD] pb-6">
            <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
              Canonical Business Information
            </h2>
            <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Verified business metadata for clients, indexers, and search engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-sans-narrative text-sm">
            <div className="space-y-4">
              <div>
                <span className="font-sans-ui text-xs uppercase text-[#B88A44] font-bold block">
                  Official Business Name
                </span>
                <span className="font-serif-editorial text-lg text-[#34281F] font-semibold block mt-0.5">
                  Hanvi Events
                </span>
              </div>

              <div>
                <span className="font-sans-ui text-xs uppercase text-[#B88A44] font-bold block">
                  Founder & Event Director
                </span>
                <span className="font-serif-editorial text-lg text-[#34281F] font-semibold block mt-0.5">
                  Ch. Kala Prasad
                </span>
                <p className="text-xs text-[#6E5D4F] mt-0.5">
                  Personally directs design, stage production, and client consultations.
                </p>
              </div>

              <div>
                <span className="font-sans-ui text-xs uppercase text-[#B88A44] font-bold block">
                  Confirmed Physical Studio Address
                </span>
                <p className="text-sm text-[#34281F] font-medium mt-1 leading-relaxed">
                  1st Floor, Subhamasthu Showroom, D.No: 20-11-40, Majestic Street, Suryanarayana Puram, Kakinada, Andhra Pradesh 533001
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-sans-ui text-xs uppercase text-[#B88A44] font-bold block">
                  Primary Contact Channels
                </span>
                <div className="mt-1 space-y-1 text-sm text-[#34281F]">
                  <p><strong>Primary Call</strong>: +91 97009 29650</p>
                  <p><strong>WhatsApp Support</strong>: +91 63054 57612</p>
                  <p><strong>Email</strong>: hello@hanvievents.com</p>
                </div>
              </div>

              <div>
                <span className="font-sans-ui text-xs uppercase text-[#B88A44] font-bold block">
                  Core Specializations
                </span>
                <ul className="mt-1 text-xs sm:text-sm text-[#6E5D4F] space-y-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#B88A44] shrink-0" />
                    <span>Traditional Telugu Vedic Mandap Architecture</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#B88A44] shrink-0" />
                    <span>Turnkey Wedding Planning & Guest Management</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#B88A44] shrink-0" />
                    <span>Themed Birthdays & Cradle Ceremonies (Barasala)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#B88A44] shrink-0" />
                    <span>Corporate Conferences & Brand Galas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Our Event Management Philosophy
            </h2>

            <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
              Hanvi Events was established in Kakinada to bring structured elegance, authentic cultural reverance, and transparent coordination to family celebrations. Under the direct leadership of Event Director <strong>Ch. Kala Prasad</strong>, our team manages every detail—from fresh Rajanigandha flower selection to acoustics, lighting, and guest receiving.
            </p>

            <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
              We serve clients across Kakinada, Rajahmundry, East Godavari, Dr. B. R. Ambedkar Konaseema District, Visakhapatnam, and Vijayawada. Every celebration is tailored around the client’s venue dimensions, budget expectations, and family traditions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Link href="/projects">
                <EditorialButton variant="gold" size="sm">
                  View Real Case Studies
                </EditorialButton>
              </Link>
              <Link href="/contact">
                <EditorialButton variant="outline" size="sm">
                  Contact Studio
                </EditorialButton>
              </Link>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#E8DDCD] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Hanvi Events Mandap Decoration Kakinada"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
