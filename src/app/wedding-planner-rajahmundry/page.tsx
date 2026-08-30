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
  Users,
  Utensils,
  CheckCircle2,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Wedding Planner in Rajahmundry — Luxury Telugu Weddings | Hanvi Events',
  description:
    'Hanvi Events designs luxury Telugu weddings, Vedic Muhurtham mandaps, Sangeet galas, and complete marriage coordination in Rajahmundry and Godavari belt.',
  alternates: {
    canonical: 'https://www.hanvievents.com/wedding-planner-rajahmundry',
  },
};

export default function WeddingPlannerRajahmundryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Planner Rajahmundry', url: '/wedding-planner-rajahmundry' },
  ]);

  const serviceSchema = getServiceSchema(
    'Wedding Planner in Rajahmundry',
    'Luxury Telugu wedding planning, mandap architecture, pre-wedding ceremony coordination, guest hospitality, and reception production in Rajahmundry.'
  );

  const weddingHighlights = [
    {
      icon: Heart,
      title: 'Sacred Telugu Muhurtham Rituals',
      desc: 'Authentic orchestration of Nischithardham, Pellikuthuru, Snathakam, Kanyadanam, and Jeelakarra Bellam Vedic ceremonies in Rajahmundry function halls.',
    },
    {
      icon: Flower2,
      title: 'Vedic Mandap & Floral Grandeur',
      desc: 'Handcrafted South Indian temple bell mandaps, fresh jasmine (Mallepoovu) canopies, lotus urulis, and floating water ponds for sacred rituals.',
    },
    {
      icon: Sparkles,
      title: 'Sangeet & Grand Reception Staging',
      desc: 'Bollywood dance floor trussing, ambient LED lighting, customized bride & groom entries, cold pyros, and royal couple throne backdrops.',
    },
    {
      icon: Users,
      title: 'Guest Hospitality & Receiving',
      desc: 'Uniformed welcome hostesses, guest luggage assistance, RSVP coordination, and VIP protocol management across Rajahmundry hotels.',
    },
    {
      icon: Utensils,
      title: 'Traditional Catering Coordination',
      desc: 'Authentic Godavari-style banana leaf traditional feasts, multi-cuisine dinner buffets, live sweet counters, and banquet dining flows.',
    },
  ];

  const faqs = [
    {
      q: 'Why hire Hanvi Events for a wedding in Rajahmundry?',
      a: 'Hanvi Events brings luxury wedding design, structural mandap fabrication, and end-to-end day-of execution personally directed by Ch. Kala Prasad. We manage all on-ground logistics between our Kakinada hub and Rajahmundry venues seamlessly.',
    },
    {
      q: 'Which venues in Rajahmundry does Hanvi Events decorate and manage?',
      a: 'We manage weddings across premier AC convention centers, riverside resort lawns, hotel banquets, and traditional kalyana mandapams across Rajahmundry, Kovvur, and Diwancheruvu.',
    },
    {
      q: 'How are fresh flowers kept fresh for early morning Rajahmundry Muhurthams?',
      a: 'Our floral team utilizes direct cold-chain transport and overnight on-site arrangement so that fragrant Jasmine, Marigold, and Dutch roses look pristine at Muhurtham time.',
    },
    {
      q: 'How do we start planning our Rajahmundry wedding with Hanvi Events?',
      a: 'Contact us on WhatsApp or call our studio directly. We review your date, guest scale, venue, and design vision, followed by a personalized blueprint and quote.',
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
              Rajahmundry Wedding Management
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Wedding Planner in Rajahmundry
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Crafting magnificent Telugu wedding celebrations, sacred Vedic mandap architecture, and unforgettable reception galas across Rajahmundry (Rajamahendravaram) and East Godavari.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="rjy_wedding_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20discuss%20wedding%20planning%20in%20Rajahmundry.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> Discuss Wedding Vision
              </EditorialButton>
            </a>
            <Link href="/mandap-decorators-kakinada">
              <EditorialButton variant="outline" size="sm">
                Explore Mandap Decor
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* Wedding Highlights */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Complete Rajahmundry Wedding Services
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              From Vedic mandap fabrication to welcoming hostesses and catering flows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingHighlights.map((item) => {
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
                    {item.desc}
                  </p>
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
              Rajahmundry Wedding FAQs
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
            <span>Related links:</span>
            <Link
              href="/event-management-rajahmundry"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Event Management Rajahmundry <ArrowRight size={11} />
            </Link>
            <Link
              href="/wedding-planner-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planner Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/mandap-decorators-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Mandap Decorators <ArrowRight size={11} />
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
