import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/data/site';
import { getBreadcrumbSchema } from '@/lib/seo';
import { Sparkles, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

export const metadata: Metadata = {
  title: 'Mandap Decorators in Kakinada — Traditional & Floral Mandap Architecture',
  description:
    'Hanvi Events designs traditional Telugu wedding mandaps, fresh marigold and jasmine canopies, temple bell setups, and acrylic mandap decor in Kakinada.',
  alternates: {
    canonical: 'https://www.hanvievents.com/mandap-decorators-kakinada',
  },
};

export default function MandapDecoratorsKakinadaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mandap Decorators Kakinada', url: '/mandap-decorators-kakinada' },
  ]);

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Vedic & Floral Mandap Design
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#34281F] font-semibold leading-tight">
            Mandap Decorators in Kakinada
          </h1>

          <p className="font-sans-narrative text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
            Specializing in handcrafted South Indian temple mandap structures, fresh botanical floral canopies, and contemporary acrylic stages engineered specifically for sacred Telugu Muhurtham ceremonies.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20mandap%20decoration%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditorialButton variant="gold" size="sm">
                Discuss Mandap Design
              </EditorialButton>
            </a>
            <Link href="/wedding-planner-kakinada">
              <EditorialButton variant="outline" size="sm">
                View Wedding Planning
              </EditorialButton>
            </Link>
          </div>
        </div>

        {/* Mandap Styles Grid */}
        <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="font-serif-editorial text-2xl text-[#34281F] font-semibold">
            Signature Mandap Styles Available
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans-narrative text-xs sm:text-sm text-[#6E5D4F]">
            <div className="p-5 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-xl text-[#34281F] font-semibold">Temple Bell Mandap</h3>
              <p>Traditional brass bell suspensions, gold pillars, fresh orange and yellow marigold drops, and lotus uruli water bowls.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-xl text-[#34281F] font-semibold">Fresh Botanical Floral Dome</h3>
              <p>Dense overhead canopy crafted with Rajanigandha, fragrant Jasmine (Mallepoovu), Dutch roses, and green foliage suspensions.</p>
            </div>

            <div className="p-5 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] space-y-2">
              <h3 className="font-serif-editorial text-xl text-[#34281F] font-semibold">Contemporary Acrylic & LED</h3>
              <p>Clear mirror pedestals, warm ambient LED spot lighting, pastel floral arcs, and elevated glass walkways.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
