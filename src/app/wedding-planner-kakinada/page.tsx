import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  Heart,
  Flower2,
  Music,
  Users,
  Utensils,
  Camera,
  CheckCircle2,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Wedding Planner in Kakinada — Telugu Wedding Management | Hanvi Events',
  description:
    'Hanvi Events provides luxury Telugu wedding planning, Vedic mandap architecture, Sangeet decor, catering coordination, and guest hospitality in Kakinada & East Godavari.',
  alternates: {
    canonical: 'https://www.hanvievents.com/wedding-planner-kakinada',
  },
};

export default function WeddingPlannerKakinadaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Planner Kakinada', url: '/wedding-planner-kakinada' },
  ]);

  const serviceSchema = getServiceSchema(
    'Wedding Planner in Kakinada',
    'Full-service Telugu wedding planning, Muhurtham mandap fabrication, Haldi and Sangeet stage design, catering management, and guest hospitality in Kakinada.'
  );

  const ceremonies = [
    {
      title: '1. Nischithardham (Engagement Ceremony)',
      desc: 'Intimate and formal engagement setups with floral backdrops, ring exchange staging, welcome signages, traditional brass diya lighting, and family seating.',
    },
    {
      title: '2. Pellikuthuru & Pellikoduku (Haldi Celebrations)',
      desc: 'Vibrant yellow and orange marigold floral canopies, traditional brass gangalam water basins, customized floral jewelry, colorful drapes, and folk music setups.',
    },
    {
      title: '3. Mehendi & Sangeet Gala',
      desc: 'Bollywood themed dance floors, aluminium truss staging, concert lighting, acoustic sound systems, cozy lounge seating, and live mehendi artist stations.',
    },
    {
      title: '4. Sacred Muhurtham (Vedic Mandap)',
      desc: 'Architectural temple mandaps with fragrant Jasmine (Mallepoovu), lotus urulis, sacred havan kund setup, priest coordination, and traditional nadaswaram accompaniment.',
    },
    {
      title: '5. Grand Wedding Reception',
      desc: 'Grand royal statement stages, LED ambient lighting, red carpet entryways with cold fire pyro entries, photobooth installations, and banquet dining flows.',
    },
    {
      title: '6. Bridal Entry & Special Moments',
      desc: 'Chadar floral canopies, doli entries, sparkler walkways, customized entry audio cues, and bride-groom receiving protocol.',
    },
  ];

  const coordinationCapabilities = [
    {
      icon: Flower2,
      title: 'Mandap & Floral Artistry',
      desc: 'Fresh botanical sourcing of Jasmine, Dutch roses, tuberose, and custom thematic stage fabrication.',
    },
    {
      icon: Utensils,
      title: 'Catering Coordination',
      desc: 'Traditional South Indian banana leaf feasts, multi-cuisine banquets, live counters, and sweet stalls.',
    },
    {
      icon: Users,
      title: 'Guest Hospitality & Protocol',
      desc: 'Uniformed welcome hostesses, guest receiving desks, transport logistics, and venue seating management.',
    },
    {
      icon: Camera,
      title: 'Photo & Cinema Direction',
      desc: 'Coordination with top candid photographers, traditional videographers, crane cameras, and live LED feeds.',
    },
    {
      icon: Music,
      title: 'Acoustic Sound & Stage Lights',
      desc: 'DMX moving head spotlights, ambient venue uplighting, background music control, and acoustic speaker pods.',
    },
    {
      icon: Heart,
      title: 'Bridal Styling Pods',
      desc: 'On-venue makeup artist stations, saree draping assistance, and bridal green room setups.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in full-scale wedding planning by Hanvi Events in Kakinada?',
      a: 'Full-scale wedding planning covers everything from venue inspection, ceremony schedule planning, traditional mandap architecture, Haldi/Sangeet decor, catering coordination, hospitality hostesses, lighting & sound production, to on-ground day-of execution led by Event Director Ch. Kala Prasad.',
    },
    {
      q: 'How does Hanvi Events handle traditional Telugu wedding rituals?',
      a: 'We have deep expertise in Vedic South Indian and Telugu wedding traditions. We coordinate all ritual requirements including Pellikuthuru, Snathakam, Kanyadanam, Jeelakarra Bellam Muhurtham sets, and Talambralu arrangements in close consultation with your family priests.',
    },
    {
      q: 'How early in advance should we book a wedding planner in Kakinada?',
      a: 'For major wedding muhurtham dates, we recommend reserving your date 2 to 6 months in advance. This ensures venue availability, custom design fabrication, and vendor coordination across East Godavari.',
    },
    {
      q: 'Can Hanvi Events coordinate weddings in Rajahmundry and surrounding East Godavari towns?',
      a: 'Yes. While our primary design studio is located in Suryanarayana Puram, Kakinada, we regularly manage weddings across Rajahmundry, Samalkota, Pithapuram, Amalapuram, and the entire Godavari belt.',
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
              Luxury Telugu Wedding Management
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Wedding Planner in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            From sacred Vedic Muhurtham mandaps and vibrant Pellikuthuru Haldi setups to grand Sangeet evenings and reception galas — Hanvi Events coordinates every sacred ritual with precision, beauty, and peaceful hospitality.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="wedding_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20discuss%20wedding%20planning%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> Discuss Your Wedding
              </EditorialButton>
            </a>
            <Link href="/mandap-decorators-kakinada">
              <EditorialButton variant="outline" size="sm">
                Explore Mandap Decor
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* Ceremony Breakdown */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Telugu Wedding Ceremony Orchestration
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Every pre-wedding ritual, muhurtham, and post-wedding celebration managed with cultural authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceremonies.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#B88A44] transition-colors"
              >
                <h3 className="font-serif-editorial text-xl font-semibold text-[#34281F]">
                  {item.title}
                </h3>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Wedding Coordination Capabilities */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Complete Wedding Production Handled
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Turnkey event management covering design, logistics, catering, and on-ground guest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coordinationCapabilities.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="space-y-2 p-4 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD]">
                  <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                    <IconComp size={18} className="text-[#B88A44]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="font-sans-narrative text-xs leading-relaxed text-[#6E5D4F]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Venue Coordination in Kakinada & Godavari Belt */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#B88A44]">
            <MapPin size={18} />
            <span className="font-sans-ui text-xs font-bold uppercase tracking-widest">
              Kakinada & East Godavari Venue Network
            </span>
          </div>
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Seamless Execution Across Top Convention Centers & Kalyana Mandapams
          </h2>
          <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
            Our production team coordinates technical setup, acoustic staging, generator backups, and floral fabrication across premier convention centers, luxury hotel banquet halls, community kalyana mandapams, and private open lawns across Kakinada, Samalkota, Pithapuram, and Rajahmundry.
          </p>
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
              Wedding Planning FAQs
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
            <span>Related wedding links:</span>
            <Link
              href="/mandap-decorators-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Mandap Decorators Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/event-management-company-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Event Management Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/about"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              About Studio & Director <ArrowRight size={11} />
            </Link>
          </div>
          <Link href="/projects" className="text-xs font-sans-ui text-[#34281F] hover:text-[#B88A44] font-medium">
            View Real Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}
