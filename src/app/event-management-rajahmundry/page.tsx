import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  HelpCircle,
  Layers,
  Heart,
  Briefcase,
  Cake,
  CheckCircle2,
  Car,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Event Management in Rajahmundry — Hanvi Events',
  description:
    'Hanvi Events provides luxury wedding planning, mandap decoration, birthday celebrations, and corporate event management across Rajahmundry (Rajamahendravaram).',
  alternates: {
    canonical: 'https://www.hanvievents.com/event-management-rajahmundry',
  },
};

export default function EventManagementRajahmundryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Event Management Rajahmundry', url: '/event-management-rajahmundry' },
  ]);

  const serviceSchema = getServiceSchema(
    'Event Management in Rajahmundry',
    'Comprehensive event planning, wedding coordination, mandap design, and corporate event production in Rajahmundry and Rajamahendravaram.'
  );

  const rajahmundryServices = [
    {
      icon: Heart,
      title: 'Telugu Wedding Planning',
      desc: 'Complete marriage orchestration — from sacred Vedic mandaps, Haldi setups, Sangeet dance floors to reception galas in Rajahmundry convention centers.',
      link: '/wedding-planner-rajahmundry',
    },
    {
      icon: Layers,
      title: 'Mandap & Stage Architecture',
      desc: 'Handcrafted South Indian temple bell mandaps, botanical jasmine domes, and contemporary acrylic lighting setups tailored for Godavari muhurthams.',
      link: '/mandap-decorators-kakinada',
    },
    {
      icon: Cake,
      title: 'Milestone & Birthday Parties',
      desc: '1st birthday celebrations, Barasala cradle ceremonies, half saree (Langa Voni) functions, and anniversary dinners at Rajahmundry banquet halls.',
      link: '/birthday-party-organisers-kakinada',
    },
    {
      icon: Briefcase,
      title: 'Corporate Meets & Brand Galas',
      desc: 'Aluminium truss staging, high-resolution LED video walls, line-array acoustics, and executive conference coordination for regional businesses.',
      link: '/corporate-event-management-kakinada',
    },
  ];

  const logisticalDifferentiators = [
    {
      title: 'Godavari Belt Venue Experience',
      desc: 'Familiarity with major convention centers, riverside resort lawns, hotel banquets, and kalyana mandapams across Rajahmundry and Kovvur.',
    },
    {
      title: 'Seamless Kakinada–Rajahmundry Logistics',
      desc: 'Our dedicated fabrication trucks and production crew arrive well in advance to ensure overnight setup completion for morning muhurthams.',
    },
    {
      title: 'Direct Leadership Oversight',
      desc: 'Event Director Ch. Kala Prasad personally directs design blueprints, vendor timing, and on-ground execution for Rajahmundry clients.',
    },
    {
      title: 'Fresh Flower Cold Preservation',
      desc: 'Direct floral procurement through regional flower markets with careful cold storage handling for crisp botanical beauty on event day.',
    },
  ];

  const faqs = [
    {
      q: 'Does Hanvi Events provide event management services in Rajahmundry (Rajamahendravaram)?',
      a: 'Yes. While our primary design studio is in Suryanarayana Puram, Kakinada, our team regularly travels to manage luxury weddings, mandap decor, milestone functions, and corporate events across Rajahmundry, Kovvur, and surrounding areas.',
    },
    {
      q: 'How are travel and logistics handled for Rajahmundry events?',
      a: 'All transportation of staging materials, floral inventory, sound equipment, and crew travel are transparently itemized in your event proposal with zero last-minute surprises.',
    },
    {
      q: 'Can we schedule a planning consultation in Rajahmundry or online?',
      a: 'Yes. We offer initial consultations via WhatsApp video call and phone, followed by an in-person site inspection at your Rajahmundry venue to finalize layouts and dimensions.',
    },
    {
      q: 'How early should we book an event planner for a Rajahmundry wedding?',
      a: 'For auspicious wedding muhurtham dates in the Godavari region, we advise connecting 2 to 6 months prior to ensure crew and equipment availability.',
    },
  ];

  const whatsappNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <MapPin size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Rajahmundry & Godavari Belt
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Event Management in Rajahmundry
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Hanvi Events delivers end-to-end event planning, traditional Telugu wedding coordination, royal mandap fabrication, and corporate stage production in Rajahmundry (Rajamahendravaram) and across East Godavari.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="rajahmundry_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20event%20management%20in%20Rajahmundry.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> Discuss Rajahmundry Event
              </EditorialButton>
            </a>
            <a data-cta="rajahmundry_call" href={`tel:${siteConfig.phoneRaw}`}>
              <EditorialButton variant="outline" size="sm">
                <Phone size={15} /> Call Studio Direct
              </EditorialButton>
            </a>
          </div>
        </div>

        {/* Rajahmundry Services Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Event Planning Services in Rajamahendravaram
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Custom design, structural fabrication, and dedicated day-of event coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rajahmundryServices.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs hover:border-[#B88A44] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5ECDD] flex items-center justify-center text-[#B88A44]">
                      <IconComp size={20} />
                    </div>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl font-semibold text-[#34281F]">
                      {item.title}
                    </h3>
                    <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#B88A44] hover:underline pt-2 font-medium"
                  >
                    View Service Details <ArrowRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Logistics & Delivery Standards */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              How We Deliver High-Standard Events in Rajahmundry
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Engineered logistics connecting our Kakinada production hub to Rajahmundry venues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans-narrative text-sm text-[#6E5D4F]">
            {logisticalDifferentiators.map((diff) => (
              <div key={diff.title} className="space-y-2">
                <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                  <CheckCircle2 size={18} className="text-[#B88A44]" />
                  <span>{diff.title}</span>
                </div>
                <p className="text-xs leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD] mb-2">
              <HelpCircle size={12} className="text-[#B88A44]" />
              <span className="font-sans-ui text-[10px] sm:text-xs uppercase tracking-widest text-[#B88A44] font-bold">
                Direct Answers
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Rajahmundry Event FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                open={index === 0}
                className="rounded-2xl border border-[#E8DDCD] bg-white open:border-[#B88A44] transition-colors"
              >
                <summary className="cursor-pointer list-none p-4 sm:p-5 font-serif-editorial text-base sm:text-lg text-[#34281F] font-semibold leading-snug">
                  <span className="mr-2 text-[#B88A44]">Q{index + 1}.</span>
                  {faq.q}
                </summary>
                <p className="px-4 pb-4 sm:px-5 sm:pb-5 font-sans-narrative text-xs sm:text-sm leading-relaxed text-[#6E5D4F]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Interlinking */}
        <div className="border-t border-[#E8DDCD] pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs font-sans-ui text-[#6E5D4F]">
            <span>Related pages:</span>
            <Link
              href="/wedding-planner-rajahmundry"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planner Rajahmundry <ArrowRight size={11} />
            </Link>
            <Link
              href="/event-management-east-godavari"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              East Godavari Events <ArrowRight size={11} />
            </Link>
            <Link
              href="/event-management-company-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Kakinada Head Studio <ArrowRight size={11} />
            </Link>
          </div>
          <Link href="/contact" className="text-xs font-sans-ui text-[#34281F] hover:text-[#B88A44] font-medium">
            Contact Studio →
          </Link>
        </div>
      </div>
    </main>
  );
}
