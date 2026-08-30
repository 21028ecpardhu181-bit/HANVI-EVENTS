import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  Briefcase,
  Presentation,
  Award,
  Mic,
  Monitor,
  CheckCircle2,
  HelpCircle,
  Building2,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Corporate Event Management in Kakinada — Hanvi Events',
  description:
    'Hanvi Events provides corporate event management, conference staging, product launches, annual days, and audio-visual production across Kakinada and East Godavari.',
  alternates: {
    canonical: 'https://www.hanvievents.com/corporate-event-management-kakinada',
  },
};

export default function CorporateEventManagementPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Corporate Event Management Kakinada', url: '/corporate-event-management-kakinada' },
  ]);

  const service = getServiceSchema(
    'Corporate Event Management in Kakinada',
    'Full-service corporate event planning, LED wall staging, conference audio-visual production, annual day celebrations, and brand activations in Kakinada.'
  );

  const corporateServices = [
    {
      icon: Briefcase,
      title: 'Annual Days & Employee Galas',
      description:
        'Turnkey orchestration for company annual day celebrations, cultural evenings, team recognition programs, themed banquet setups, and professional stage entertainment.',
    },
    {
      icon: Presentation,
      title: 'Conferences & Business Summits',
      description:
        'Executive stage setups, delegate registration desks, podium fabrication, multi-mic audio management, lapel systems, and high-lumen projection for multi-session seminars.',
    },
    {
      icon: Sparkles,
      title: 'Product Launches & Brand Activations',
      description:
        'Dramatic product reveal mechanics, branded backdrops, media interaction areas, experience booths, and dynamic lighting cues to maximize brand impact.',
    },
    {
      icon: Award,
      title: 'Corporate Award Ceremonies',
      description:
        'Red carpet arrival experiences, crystal and acrylic memento presentation arrangements, background scoring, synchronized spotlight cues, and VIP seating layouts.',
    },
    {
      icon: Monitor,
      title: 'Truss Staging, LED Walls & AV',
      description:
        'P3/P4 high-definition LED video backdrops, heavy-duty aluminium box trussing, line array sound systems, DMX moving heads, and live multicam video streaming.',
    },
    {
      icon: Building2,
      title: 'Dealer Meets & Expos',
      description:
        'Exhibition stall design, corporate hospitality, delegate kit coordination, interactive engagement zones, and customized buffet dining logistics.',
    },
  ];

  const faqs = [
    {
      q: 'What types of corporate events does Hanvi Events manage in Kakinada?',
      a: 'We manage corporate conferences, annual days, dealer meets, product launches, CSR events, executive board meetings, award galas, and industry seminars across Kakinada, Samalkota, and East Godavari.',
    },
    {
      q: 'Can Hanvi Events provide complete audio-visual (AV) and LED screen staging?',
      a: 'Yes. We supply and manage high-definition LED video walls, line-array acoustic sound systems, cordless/collar mics, stage trussing, thematic lighting, and live multicam recording.',
    },
    {
      q: 'Do you provide on-ground event coordination and run-of-show management?',
      a: 'Yes. Our production team oversees stage timing, speaker cues, presentation transitions, VIP protocol reception, delegate registration desks, and catering schedule coordination.',
    },
    {
      q: 'How do we receive a corporate event proposal and quotation?',
      a: 'Share your event objective, tentative date, delegate count, venue, and technical requirements via call or WhatsApp. We provide an itemized, transparent corporate proposal.',
    },
  ];

  const whatsappNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Kakinada Corporate Event Production
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Corporate Event Management in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Professional event management, conference staging, high-definition audio-visual execution, and turnkey event-day coordination for enterprises, institutions, and brands in Kakinada and East Godavari.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="corporate_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20corporate%20event%20management%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> Request Corporate Brief
              </EditorialButton>
            </a>
            <a data-cta="corporate_call" href={`tel:${siteConfig.phoneRaw}`}>
              <EditorialButton variant="outline" size="sm">
                <Phone size={15} /> Speak with Director
              </EditorialButton>
            </a>
          </div>
        </div>

        {/* Corporate Services Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Corporate Planning & Production Capabilities
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Precision engineering, crisp audio-visuals, and seamless run-of-show execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#B88A44] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5ECDD] flex items-center justify-center text-[#B88A44]">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                    {item.title}
                  </h3>
                  <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Quality Standards */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Corporate Standards & On-Ground Execution
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Why business organizations and institutional brands partner with Hanvi Events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans-narrative text-sm text-[#6E5D4F]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Punctual Execution</span>
              </div>
              <p className="text-xs leading-relaxed">
                Strict stage timing control, prompt soundchecks, and seamless run-of-show management.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Broadcast Quality AV</span>
              </div>
              <p className="text-xs leading-relaxed">
                Crystal clear digital acoustics, feedback suppression, and crisp high-resolution visual displays.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Single Point Contact</span>
              </div>
              <p className="text-xs leading-relaxed">
                Dedicated event manager overseeing staging, vendor deliveries, VIP hosting, and dining flows.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Transparent Itemization</span>
              </div>
              <p className="text-xs leading-relaxed">
                Clear commercial proposals with detailed technical specifications and vendor schedules.
              </p>
            </div>
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
              Corporate Planning FAQs
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

        {/* Internal Navigation Links */}
        <div className="border-t border-[#E8DDCD] pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs font-sans-ui text-[#6E5D4F]">
            <span>Explore other capabilities:</span>
            <Link
              href="/event-management-company-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Event Management Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/wedding-planner-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planner Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/birthday-party-organisers-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Milestone Celebrations <ArrowRight size={11} />
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
