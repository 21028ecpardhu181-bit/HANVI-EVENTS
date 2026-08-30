import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';
import {
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  MapPin,
  HelpCircle,
  Layers,
  CalendarCheck,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

export const metadata: Metadata = {
  title: 'Event Management Company in Kakinada — Hanvi Events',
  description:
    'Hanvi Events is a Kakinada-based event management company specializing in weddings, mandap design, milestone celebrations, and corporate galas across East Godavari.',
  alternates: {
    canonical: 'https://www.hanvievents.com/event-management-company-kakinada',
  },
};

export default function EventManagementKakinadaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Event Management Company Kakinada', url: '/event-management-company-kakinada' },
  ]);

  const serviceSchema = getServiceSchema(
    'Event Management Company in Kakinada',
    'Full-scale event management, luxury wedding planning, mandap decoration, birthday celebrations, and corporate event coordination in Kakinada and East Godavari.'
  );

  const capabilities = [
    {
      title: 'Luxury Telugu Wedding Planning',
      desc: 'Complete marriage orchestration from traditional Vedic mandaps, Haldi canopies, Sangeet dance stages, to guest receiving hostesses and catering coordination.',
      link: '/wedding-planner-kakinada',
      linkText: 'Explore Wedding Planning',
    },
    {
      title: 'Mandap & Floral Stage Architecture',
      desc: 'Handcrafted South Indian temple bell setups, fresh botanical Jasmine & Marigold domes, and contemporary acrylic lighting stages engineered for sacred Muhurthams.',
      link: '/mandap-decorators-kakinada',
      linkText: 'Explore Mandap Decor',
    },
    {
      title: 'Milestone & Birthday Celebrations',
      desc: 'Milestone 1st birthdays, Barasala cradle ceremonies, half saree (Langa Voni) functions, Seemantham baby showers, and anniversary banquets.',
      link: '/birthday-party-organisers-kakinada',
      linkText: 'Explore Birthday Planning',
    },
    {
      title: 'Corporate Galas & Brand Launches',
      desc: 'Aluminium box truss staging, P3/P4 LED video walls, line-array audio engineering, product reveal mechanics, and seamless conference run-of-show.',
      link: '/corporate-event-management-kakinada',
      linkText: 'Explore Corporate Services',
    },
    {
      title: 'Catering & Hospitality Coordination',
      desc: 'Authentic South Indian banana leaf feasts, multi-cuisine banquets, live counters, welcome drinks, and courteous venue hostesses.',
      link: '/services',
      linkText: 'Explore Catering & Services',
    },
    {
      title: 'Audio-Visual, Lighting & Media',
      desc: 'DMX moving head spotlights, ambient venue uplighting, candid photography direction, cinema videography, and live multicam feeds.',
      link: '/gallery',
      linkText: 'Explore Media & Gallery',
    },
  ];

  const serviceTowns = [
    'Kakinada (HQ Studio)',
    'Rajahmundry (Rajamahendravaram)',
    'Samalkota',
    'Pithapuram',
    'Amalapuram & Konaseema',
    'Peddapuram',
    'Mandapeta',
    'Annavaram',
    'Tuni',
    'Ramachandrapuram',
    'Yanam',
    'East Godavari District',
  ];

  const faqs = [
    {
      q: 'What does a full-service event management company in Kakinada do?',
      a: 'A full-service event management company oversees end-to-end event execution — from conceptualizing design themes and fabricating stages, to managing catering, sound & lighting, vendor timing, VIP protocol, and on-ground crisis management on the event day.',
    },
    {
      q: 'How is pricing determined for events managed by Hanvi Events?',
      a: 'Event pricing is customized based on your specific brief: venue location, expected guest scale, structural and floral design complexity, technical AV requirements, and coordination scope. We provide clear, itemized proposals.',
    },
    {
      q: 'Can Hanvi Events manage events in Rajahmundry and other East Godavari towns?',
      a: 'Yes. While our primary studio is located in Suryanarayana Puram, Kakinada, our production and planning teams execute celebrations across Rajahmundry, Samalkota, Pithapuram, Amalapuram, and the entire Godavari belt.',
    },
    {
      q: 'How early should we start planning our celebration?',
      a: 'For weddings and major corporate conferences, 2 to 6 months in advance is recommended to lock in prime dates and venues. For birthdays, cradle ceremonies, and private milestones, 2 to 4 weeks advance notice is ideal.',
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
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Kakinada Event Management Studio
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Event Management Company in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Hanvi Events provides turnkey event planning, traditional mandap architecture, floral stage fabrication, catering coordination, and on-ground management for weddings, milestone celebrations, and corporate galas across Kakinada and East Godavari.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="event_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20event%20management%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp Consultation
              </EditorialButton>
            </a>
            <a data-cta="event_call" href={`tel:${siteConfig.phoneRaw}`}>
              <EditorialButton variant="outline" size="sm">
                <Phone size={15} /> Call Studio Direct
              </EditorialButton>
            </a>
            <Link href="/projects">
              <EditorialButton variant="outline" size="sm">
                View Real Projects
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Event Planning & Production Verticals
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              End-to-end design, vendor management, and technical staging orchestrated under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#B88A44] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                    {item.title}
                  </h3>
                  <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#B88A44] hover:underline pt-2"
                >
                  {item.linkText} <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Philosophy */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Why Families & Organizations Choose Hanvi Events
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Direct leadership, local presence, and verified on-ground production capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans-narrative text-sm text-[#6E5D4F]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <Building size={18} className="text-[#B88A44]" />
                <span>Physical Kakinada Studio</span>
              </div>
              <p className="text-xs leading-relaxed">
                Located at Suryanarayana Puram, Kakinada — personal consultations with Event Director Ch. Kala Prasad.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <Layers size={18} className="text-[#B88A44]" />
                <span>Turnkey Production</span>
              </div>
              <p className="text-xs leading-relaxed">
                In-house mandap fabrication, stage structures, floral cold-chain, and line-array audio systems.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CalendarCheck size={18} className="text-[#B88A44]" />
                <span>Telugu Cultural Depth</span>
              </div>
              <p className="text-xs leading-relaxed">
                Vedic Muhurtham understanding, ceremonial sequence timing, and traditional Godavari hospitality.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <ShieldCheck size={18} className="text-[#B88A44]" />
                <span>Itemized Clarity</span>
              </div>
              <p className="text-xs leading-relaxed">
                Clear service agreements, realistic planning schedules, and zero hidden costs on event day.
              </p>
            </div>
          </div>
        </div>

        {/* Service Area Network */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#B88A44]">
            <MapPin size={18} />
            <span className="font-sans-ui text-xs font-bold uppercase tracking-widest">
              Regional Service Coverage
            </span>
          </div>
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Serving Kakinada, Rajahmundry & East Godavari
          </h2>
          <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
            Hanvi Events coordinates celebrations across major hubs and surrounding towns in Andhra Pradesh:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
            {serviceTowns.map((town) => (
              <div
                key={town}
                className="px-3 py-2 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] text-xs font-sans-ui text-[#34281F] flex items-center gap-1.5"
              >
                <CheckCircle2 size={13} className="text-[#B88A44] shrink-0" />
                <span>{town}</span>
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
              Event Planning FAQs
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
            <span>Explore services:</span>
            <Link
              href="/wedding-planner-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planner <ArrowRight size={11} />
            </Link>
            <Link
              href="/mandap-decorators-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Mandap Decorators <ArrowRight size={11} />
            </Link>
            <Link
              href="/birthday-party-organisers-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Birthday Organisers <ArrowRight size={11} />
            </Link>
            <Link
              href="/corporate-event-management-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Corporate Events <ArrowRight size={11} />
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
