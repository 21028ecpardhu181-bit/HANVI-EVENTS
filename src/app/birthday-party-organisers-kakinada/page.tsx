import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  Gift,
  Cake,
  Heart,
  Baby,
  PartyPopper,
  Calendar,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Birthday Party Organisers in Kakinada — Celebrations & Milestones | Hanvi Events',
  description:
    'Hanvi Events designs 1st birthdays, kids themed parties, cradle ceremonies (Barasala), half saree functions, and milestone celebrations across Kakinada and East Godavari.',
  alternates: {
    canonical: 'https://www.hanvievents.com/birthday-party-organisers-kakinada',
  },
};

export default function BirthdayPartyOrganisersPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Birthday Party Organisers Kakinada', url: '/birthday-party-organisers-kakinada' },
  ]);

  const service = getServiceSchema(
    'Birthday Party Organisers in Kakinada',
    'Full-service birthday party planning, thematic stage decoration, Barasala cradle setups, half saree ceremonies, and social celebrations in Kakinada and East Godavari.'
  );

  const celebrationTypes = [
    {
      icon: Cake,
      title: '1st Birthday Grand Setups',
      description:
        'Signature milestone 1st birthday setups featuring custom 3D character props, balloon arches, fairy light canopies, themed photo booths, and bespoke cake cutting tables.',
    },
    {
      icon: Baby,
      title: 'Cradle & Naming Ceremony (Barasala)',
      description:
        'Traditional Vedic cradle ceremonies with fresh jasmine and marigold floral swings, traditional uruli water arrangements, brass bells, and comfortable seating for family elders.',
    },
    {
      icon: Heart,
      title: 'Half Saree & Dhoti Functions',
      description:
        'Culturally rich decor for Langa Voni and Dhoti ceremonies. Includes traditional floral mandaps, photo backdrops, seating arrangements, and ceremonial entrance arches.',
    },
    {
      icon: PartyPopper,
      title: 'Kids Themed Adventure Parties',
      description:
        'Immersive themes from Jungle Safari, Princess Castles, Space Exploration, Superhero Universes to Carnival setups with interactive game counters and live entertainment.',
    },
    {
      icon: Gift,
      title: 'Milestone & Adult Birthdays',
      description:
        'Sophisticated evening setups for 25th, 50th, and 60th birthdays featuring elegant LED ambient lighting, acoustic sound arrangements, floral backdrops, and banquet dining.',
    },
    {
      icon: Calendar,
      title: 'Baby Showers & Anniversaries',
      description:
        'Pastel floral themes, Seemantham traditional seating, silver and golden jubilee anniversary setups with customized couple timeline photo galleries.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in a birthday party planning package in Kakinada?',
      a: 'A typical birthday package can include theme consultation, stage backdrop fabrication, balloon & floral styling, entrance arch design, cake table setup, sound & lighting setup, live activity hosts (MC, magic show, mascot), and coordination with caterers.',
    },
    {
      q: 'How early should we book a birthday party organiser in Kakinada?',
      a: 'We recommend connecting with our studio 2 to 4 weeks prior to the event date to finalize custom themes, prop fabrication, venue coordination, and vendor scheduling.',
    },
    {
      q: 'Can Hanvi Events organise cradle ceremonies and half saree functions at home or outdoor venues?',
      a: 'Yes. We design and execute setups for intimate home spaces, apartment banquet halls, open lawns, and premier convention centers across Kakinada, Samalkota, Pithapuram, and Rajahmundry.',
    },
    {
      q: 'How is pricing determined for birthday decorations and event management?',
      a: 'Pricing is tailored based on the venue scale, selected decor complexity (organic balloon styling, 3D props, fresh florals), lighting requirements, guest count, and additional entertainment services.',
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
              Kakinada Milestone & Birthday Planning
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Birthday Party Organisers in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            From magical 1st birthday theme universes and traditional Barasala cradle setups to vibrant half saree functions and anniversary galas — Hanvi Events delivers stress-free, handcrafted celebrations across Kakinada and East Godavari.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="birthday_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20birthday%20party%20planning%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> WhatsApp Studio
              </EditorialButton>
            </a>
            <a data-cta="birthday_call" href={`tel:${siteConfig.phoneRaw}`}>
              <EditorialButton variant="outline" size="sm">
                <Phone size={15} /> Call Event Director
              </EditorialButton>
            </a>
          </div>
        </div>

        {/* Celebrations Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Celebrations & Milestone Services
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Customized design, fabrication, and seamless on-ground coordination for every family milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrationTypes.map((item) => {
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

        {/* What We Handle Section */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              End-to-End Coordination Included
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              We handle the entire production so parents and families can celebrate stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans-narrative text-sm text-[#6E5D4F]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Theme Design & Staging</span>
              </div>
              <p className="text-xs leading-relaxed">
                Custom backdrop arches, marquee letter lights, 3D acrylic cutouts, and organic balloon styling.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Entertainment & Hosts</span>
              </div>
              <p className="text-xs leading-relaxed">
                Engaging party anchors (MC), interactive games, magic shows, character mascots, and music.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Food Stalls & Catering</span>
              </div>
              <p className="text-xs leading-relaxed">
                Coordination for live popcorn, cotton candy, chocolate fountains, ice cream carts, and banquet dining.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                <CheckCircle2 size={18} className="text-[#B88A44]" />
                <span>Photo & Video Coverage</span>
              </div>
              <p className="text-xs leading-relaxed">
                Candid moment captures, cinematic highlight reels, family portraits, and instant photo magnets.
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
              Frequently Asked Questions
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
            <span>Explore other services:</span>
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
              href="/mandap-decorators-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Mandap Decorators Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/corporate-event-management-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Corporate Events <ArrowRight size={11} />
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
