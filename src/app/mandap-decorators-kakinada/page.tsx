import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  Flower2,
  Layers,
  ShieldCheck,
  Clock,
  Palette,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mandap Decorators in Kakinada — Traditional & Floral Mandap Architecture | Hanvi Events',
  description:
    'Hanvi Events designs traditional Telugu wedding mandaps, fresh jasmine and marigold canopies, temple bell setups, and acrylic stages in Kakinada & East Godavari.',
  alternates: {
    canonical: 'https://www.hanvievents.com/mandap-decorators-kakinada',
  },
};

export default function MandapDecoratorsKakinadaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mandap Decorators Kakinada', url: '/mandap-decorators-kakinada' },
  ]);

  const serviceSchema = getServiceSchema(
    'Mandap Decorators in Kakinada',
    'Handcrafted Vedic mandap architecture, fresh floral domes, temple bell stage setups, reception backdrops, and wedding entrance fabrication in Kakinada.'
  );

  const mandapStyles = [
    {
      icon: Flower2,
      title: 'Temple Bell Mandap',
      description:
        'Traditional brass bell suspensions, gold pillars, fresh orange and yellow marigold drops, brass diyas, and floating lotus uruli water bowls.',
    },
    {
      icon: Layers,
      title: 'Fresh Botanical Floral Dome',
      description:
        'Dense overhead canopies crafted with fresh fragrant Jasmine (Mallepoovu), Rajanigandha, imported Bangalore Dutch roses, and cascading greens.',
    },
    {
      icon: Palette,
      title: 'Contemporary Acrylic & LED',
      description:
        'Mirror pedestals, warm ambient LED spot lighting, pastel floral arcs, glass walkways, and minimalist architectural columns.',
    },
    {
      icon: Sparkles,
      title: 'Royal Heritage Carved Mandap',
      description:
        'Intricately carved fiber panels, gold leafing accents, royal crown domes, and traditional South Indian temple sanctum aesthetics.',
    },
    {
      icon: ShieldCheck,
      title: 'Grand Reception Stage Backdrops',
      description:
        '3D layered floral walls, crystal chandelier suspensions, geometric arches, and customized couple monogram lighting.',
    },
    {
      icon: Clock,
      title: 'Ceremonial Entrance & Walkways',
      description:
        'Grand welcoming arches, floral rangoli pathways, carved elephant props, brass lamp stands, and cold fire pyro entry setups.',
    },
  ];

  const floralSpecs = [
    {
      title: 'Fresh Botanical Sourcing',
      desc: 'Direct sourcing of fragrant Jasmine (Mallepoovu), Marigold, Rajanigandha, Carnations, and premium Dutch roses.',
    },
    {
      title: 'Cold Preservation & Timing',
      desc: 'Floral arrangements crafted overnight to ensure pristine freshness for early morning Muhurthams.',
    },
    {
      title: 'Structural Safety & Fire Proofing',
      desc: 'Heavy-duty steel/aluminium truss staging, fire-retardant fabric drapes, and safe havan kund heat management.',
    },
    {
      title: 'Custom Color Themes',
      desc: 'Palette coordination matching bride & groom attire — from traditional yellow-red to modern pastel palettes.',
    },
  ];

  const faqs = [
    {
      q: 'How much does mandap decoration cost in Kakinada?',
      a: 'Mandap decoration pricing depends on the selected style (traditional marigold, dense fresh flower dome, or royal temple panel setup), structural dimensions, venue access, and floral volume. We provide an itemized quote after understanding your venue and ceremony requirements.',
    },
    {
      q: 'Do you use fresh flowers or artificial flowers for wedding mandaps?',
      a: 'We customize based on family preferences. We specialize in 100% fresh South Indian botanical florals (Jasmine, Marigold, Roses, Rajanigandha), luxury silk-hybrid florals, or complete fresh flower canopies.',
    },
    {
      q: 'How much setup time is needed to construct a wedding mandap in Kakinada?',
      a: 'Intricate floral and architectural mandaps require between 8 to 18 hours of on-site fabrication. For early morning Muhurthams, our team completes staging overnight so the mandap is ready hours before rituals begin.',
    },
    {
      q: 'Can Hanvi Events customize mandap designs based on reference photos?',
      a: 'Yes. You can share your design ideas or reference photos with Event Director Ch. Kala Prasad during consultation. We tailor the scale, floral density, and colors to match your wedding venue.',
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
              Vedic & Floral Mandap Architecture
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Mandap Decorators in Kakinada
          </h1>

          <p className="font-sans-narrative text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            Specializing in handcrafted South Indian temple mandap structures, fresh botanical floral canopies, and contemporary acrylic stages engineered specifically for sacred Telugu Muhurtham ceremonies across Kakinada and East Godavari.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              data-cta="mandap_whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20discuss%20mandap%20decoration%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                <MessageCircle size={15} /> Discuss Mandap Design
              </EditorialButton>
            </a>
            <Link href="/wedding-planner-kakinada">
              <EditorialButton variant="outline" size="sm">
                Explore Full Wedding Planning
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* Mandap Styles Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DDCD] pb-4">
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Signature Mandap Styles Available
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Custom built by experienced craftsmen for weddings, muhurthams, and receptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandapStyles.map((item) => {
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

        {/* Floral Craft & Material Standards */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-semibold">
              Floral Quality & Structural Engineering
            </h2>
            <p className="font-sans-narrative text-sm text-[#6E5D4F] mt-1">
              Every mandap is engineered for photographic brilliance, structural safety, and Vedic ritual sanctity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans-narrative text-sm text-[#6E5D4F]">
            {floralSpecs.map((spec) => (
              <div key={spec.title} className="space-y-2">
                <div className="flex items-center gap-2 text-[#34281F] font-semibold font-serif-editorial text-lg">
                  <CheckCircle2 size={18} className="text-[#B88A44]" />
                  <span>{spec.title}</span>
                </div>
                <p className="text-xs leading-relaxed">{spec.desc}</p>
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
              Mandap Decoration FAQs
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
            <span>Explore related services:</span>
            <Link
              href="/wedding-planner-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Wedding Planner Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/event-management-company-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Event Management Kakinada <ArrowRight size={11} />
            </Link>
            <Link
              href="/birthday-party-organisers-kakinada"
              className="text-[#B88A44] hover:underline inline-flex items-center gap-1"
            >
              Birthday Celebrations <ArrowRight size={11} />
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
