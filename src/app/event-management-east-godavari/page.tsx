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
  Heart,
  Flower2,
  Cake,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Event Management in East Godavari District — Hanvi Events',
  description:
    'Hanvi Events provides luxury wedding planning, mandap decoration, birthday celebrations, and corporate event management across East Godavari and Godavari Delta towns.',
  alternates: {
    canonical: 'https://www.hanvievents.com/event-management-east-godavari',
  },
};

export default function EventManagementEastGodavariPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Event Management East Godavari', url: '/event-management-east-godavari' },
  ]);

  const serviceSchema = getServiceSchema(
    'Event Management in East Godavari',
    'District-wide event management, luxury wedding planning, traditional mandap architecture, and corporate event coordination across East Godavari.'
  );

  const townsServed = [
    {
      town: 'Kakinada',
      role: 'Headquarters & Studio Hub',
      desc: 'Physical studio at Suryanarayana Puram providing full consultation, fabrication, and production dispatch.',
    },
    {
      town: 'Rajahmundry',
      role: 'Major Commercial Center',
      desc: 'Full-scale wedding planning, grand mandap setups, and corporate staging across city convention halls.',
    },
    {
      town: 'Samalkota & Pithapuram',
      role: 'Heritage & Temple Towns',
      desc: 'Traditional Vedic wedding mandaps, temple ceremonies, and family milestone celebrations.',
    },
    {
      town: 'Amalapuram & Konaseema',
      role: 'Delta & Destination Weddings',
      desc: 'Scenic open lawn celebrations, traditional Godavari-style floral canopies, and riverside banquets.',
    },
    {
      town: 'Mandapeta & Ramachandrapuram',
      role: 'Agricultural & Commercial Hubs',
      desc: 'Grand kalyana mandapam transformations, Sangeet dance floors, and milestone anniversary events.',
    },
    {
      town: 'Peddapuram, Annavaram & Tuni',
      role: 'Northern Belt & Sacred Centers',
      desc: 'Muhurtham coordination, spiritual function decor, and wedding guest hospitality management.',
    },
  ];

  const serviceCategories = [
    {
      icon: Heart,
      title: 'Vedic Telugu Weddings',
      desc: 'End-to-end marriage management from Nischithardham to reception galas with authentic ritual alignment.',
      link: '/wedding-planner-kakinada',
    },
    {
      icon: Flower2,
      title: 'Architectural Mandaps',
      desc: 'Traditional South Indian temple bell structures, fresh Jasmine domes, and modern acrylic stages.',
      link: '/mandap-decorators-kakinada',
    },
    {
      icon: Cake,
      title: 'Milestones & Birthdays',
      desc: '1st birthday theme setups, Barasala cradle ceremonies, and half saree (Langa Voni) functions.',
      link: '/birthday-party-organisers-kakinada',
    },
    {
      icon: Briefcase,
      title: 'Corporate Galas',
      desc: 'P3/P4 LED walls, box truss staging, line-array audio, and conference day-of coordination.',
      link: '/corporate-event-management-kakinada',
    },
  ];

  const faqs = [
    {
      q: 'Which towns in East Godavari does Hanvi Events serve?',
      a: 'We manage events across Kakinada, Rajahmundry, Samalkota, Pithapuram, Amalapuram, Mandapeta, Peddapuram, Annavaram, Tuni, Ramachandrapuram, and the surrounding Godavari delta.',
    },
    {
      q: 'How are equipment transport and crew logistics managed across East Godavari?',
      a: 'Our centralized production team in Kakinada coordinates dedicated transport trucks for staging, lighting, and fresh flowers, ensuring everything arrives hours before event execution.',
    },
    {
      q: 'How do we request a tailored estimate for an East Godavari event?',
      a: 'Reach out via WhatsApp or call our studio directly with your event date, town, venue, and guest scale. We provide an itemized, transparent proposal.',
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
              District-Wide Event Coverage
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Event Management in East Godavari
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Hanvi Events provides luxury wedding planning, traditional mandap fabrication, milestone celebration coordination, and corporate stage production across East Godavari and the Godavari Delta.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="eastgodavari_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20event%20management%20in%20East%20Godavari.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp District Desk
              </EditorialButton>
            </a>
            <a data-cta="eastgodavari_call" href={`tel:${siteConfig.phoneRaw}`}>
              <EditorialButton variant="outline" size="sm">
                <Phone size={15} /> Call Event Director
              </EditorialButton>
            </a>
          </div>
        </div>

        {/* Towns Network Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Towns & Municipalities Served Across East Godavari
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Centralized quality control dispatched directly from our Kakinada studio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {townsServed.map((item) => (
              <div
                key={item.town}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-2 shadow-xs hover:border-[#B88A44] transition-colors"
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5ECDD] text-[#B88A44] font-sans-ui text-[10px] font-bold uppercase">
                  {item.role}
                </div>
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {item.town}
                </h3>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Full Spectrum Event Capabilities
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Turnkey production managed with single-point accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.title} className="space-y-3 p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD]">
                  <div className="w-9 h-9 rounded-lg bg-[#F5ECDD] flex items-center justify-center text-[#B88A44]">
                    <IconComp size={18} />
                  </div>
                  <h3 className="font-serif-editorial text-lg font-semibold text-[#34281F]">
                    {cat.title}
                  </h3>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed">
                    {cat.desc}
                  </p>
                  <Link
                    href={cat.link}
                    className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#B88A44] hover:underline pt-1 font-medium"
                  >
                    View Details <ArrowRight size={11} />
                  </Link>
                </div>
              );
            })}
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
              East Godavari Event FAQs
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
            <span>Explore city hubs:</span>
            <Link
              href="/event-management-company-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Kakinada HQ Hub <ArrowRight size={11} />
            </Link>
            <Link
              href="/event-management-rajahmundry"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Rajahmundry Hub <ArrowRight size={11} />
            </Link>
            <Link
              href="/wedding-planner-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planning <ArrowRight size={11} />
            </Link>
          </div>
          <Link href="/about" className="text-xs font-sans-ui text-[#34281F] hover:text-[#B88A44] font-medium">
            About Hanvi Events →
          </Link>
        </div>
      </div>
    </main>
  );
}
