import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Sparkles, HelpCircle, ArrowLeft, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { getSanityServiceBySlug, getSanityServices, getSanityGalleryMedia } from '@/lib/sanity/fetch';
import { siteConfig } from '@/lib/data/site';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { ShareButton } from '@/components/ui/ShareButton';
import { RelatedServicesSection } from '@/components/sections/RelatedServicesSection';
import { ServiceVisualShowcase } from '@/components/sections/ServiceVisualShowcase';
import { ServiceBookingGlassPanel } from '@/components/services/ServiceBookingGlassPanel';
import { SITE_URL, createPageMetadata } from '@/lib/seo';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const services = await getSanityServices();
  const slugSet = new Set<string>();

  services.forEach((service) => {
    if (service.slug) slugSet.add(service.slug);
  });

  const legacyAliases = [
    'wedding-planning',
    'birthday-parties',
    'makeup',
    'marriage-weddings',
    'birthday-events',
    'sangeet-mehandi',
    'mehendi',
    'cradle-ceremony',
    'anniversary-get-together',
    'corporate-decorations',
    'decoration',
    'catering',
    'dj',
    'entertainment',
    'venue-booking',
  ];
  legacyAliases.forEach((alias) => slugSet.add(alias));

  return Array.from(slugSet).map((slug) => ({
    slug,
  }));
}

const serviceTitlesBySlug: Record<string, string> = {
  'marriage-weddings': 'Wedding Planning & Mandap Design in Kakinada | Hanvi Events',
  'birthdays-anniversaries': 'Birthday & Milestone Event Planning in Kakinada | Hanvi Events',
  'bridal-makeup': 'Bridal Makeup & Hair Styling in Kakinada | Hanvi Events',
  'decoration-theme-setup': 'Stage Decoration & Theme Setup in Kakinada | Hanvi Events',
  'catering-food-services': 'Wedding Catering & Food Services in Kakinada | Hanvi Events',
  'corporate-events': 'Corporate Events & Conferences in Kakinada | Hanvi Events',
  'entertainment-live-performances': 'Event Entertainment, Sound & Lighting in Kakinada | Hanvi Events',
};

const localizedKeywordsBySlug: Record<string, string[]> = {
  'marriage-weddings': [
    'wedding planning Kakinada',
    'marriage organizers East Godavari',
    'mandap decoration Kakinada',
    'Telugu wedding ceremonies',
    'Pellikuthuru decor',
    'reception stage decoration',
  ],
  'birthdays-anniversaries': [
    'birthday party planning Kakinada',
    'cradle ceremony decoration (Barasala)',
    'half saree function planners',
    'theme birthday decor East Godavari',
    'anniversary celebration organizers',
  ],
  'bridal-makeup': [
    'bridal makeup artist Kakinada',
    'HD airbrush bridal makeup',
    'wedding makeup East Godavari',
    'saree draping and hair styling',
    'poola jada styling',
  ],
  'decoration-theme-setup': [
    'stage decoration Kakinada',
    'floral mandap design',
    'theme event setup East Godavari',
    'crystal lighting and backdrop decor',
  ],
  'catering-food-services': [
    'wedding catering Kakinada',
    'traditional Andhra wedding food',
    'banquet catering East Godavari',
    'live food stalls',
  ],
  'corporate-events': [
    'corporate event organizers Kakinada',
    'conference and seminar management',
    'annual day event production',
  ],
  'entertainment-live-performances': [
    'wedding DJ and sound system Kakinada',
    'live music troupe Andhra Pradesh',
    'stage lighting and sound production',
  ],
};

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getSanityServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Hanvi Events',
      description: 'The requested event planning service could not be found.',
    };
  }

  const customKeywords = localizedKeywordsBySlug[service.slug] || [
    service.title,
    `${service.title} in Kakinada`,
    'Hanvi Events',
    'Event Planning East Godavari',
  ];

  const title = service.seoTitle || serviceTitlesBySlug[service.slug] || `${service.title} in Kakinada | Hanvi Events`;
  const description = service.seoDescription || `${service.description} Managed by Event Director Ch. Kala Prasad in Kakinada & Andhra Pradesh. Starting from ${service.startingPrice}.`;

  return createPageMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    keywords: customKeywords,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getSanityServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const [allServices, sanityGalleryMedia] = await Promise.all([
    getSanityServices(),
    getSanityGalleryMedia(),
  ]);
  const relatedServices = allServices.filter((s) => s.slug !== service.slug).slice(0, 4);

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      '@id': `${SITE_URL}/#business`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Andhra Pradesh',
    },
    offers: {
      '@type': 'Offer',
      price: service.startingPrice?.replace(/[^0-9]/g, '') || '15000',
      priceCurrency: 'INR',
    },
    image: service.heroImage,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
    ],
  };

  const faqJsonLd = service.faq && service.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null;

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 bg-[#FCF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Compact App-like Hero Banner */}
      <section className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] flex items-center justify-center bg-[#1E1712] overflow-hidden">
        <ImageWithSkeleton
          src={service.heroImage}
          alt={`${service.title} Hero Background - Hanvi Events`}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F5] via-[#1E1712]/60 to-[#1E1712]/40" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-1.5 sm:space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs border border-white/25 text-[#FCF9F5] text-[10px] sm:text-xs font-sans-ui">
            <ShieldCheck className="w-3 h-3 text-[#B88A44]" />
            <span>Ch. Kala Prasad Supervision</span>
          </div>

          <span className="font-script-accent text-xl sm:text-3xl md:text-4xl text-[#B88A44] block">
            {service.tagline || 'Bespoke Celebration'}
          </span>
          <h1 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#1E1712] drop-shadow-xs">
            {service.title}
          </h1>

          {/* Quick Stats Pill Row */}
          <div className="pt-1 flex items-center justify-center gap-2 flex-wrap text-[11px] sm:text-xs font-sans-ui text-[#6E5D4F]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F5ECDD]/90 border border-[#E8DDCD]">
              📍 Kakinada & AP
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#B88A44]/15 text-[#7A531C] font-semibold border border-[#B88A44]/30">
              Starting {service.startingPrice || 'On Request'}
            </span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto px-3 sm:px-6 md:px-8 mt-4 sm:mt-6">
        
        {/* Navigation & Share Row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-sans-ui text-[#7A531C] hover:text-[#34281F] font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
          <ShareButton
            title={service.title}
            description={service.shortDescription || service.description}
            url={`${SITE_URL}/services/${service.slug}`}
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Left Column: Details, Features & Gallery */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            {/* Overview & Deliverables Box */}
            <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-4 shadow-2xs">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[#B88A44]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-script-accent text-lg">Craft & Scope</span>
                </div>
                <h2 className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-[#34281F]">
                  About {service.title}
                </h2>
                <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed">
                  {service.description}
                </p>
                {service.subtitle && (
                  <p className="font-sans-ui text-[11px] sm:text-xs text-[#7A531C] font-semibold tracking-wide border-l-2 border-[#B88A44] pl-2.5 py-1 bg-[#B88A44]/10 rounded-r-md">
                    {service.subtitle}
                  </p>
                )}
              </div>

              {/* What We Provide / Deliverables Micro-Chips (Compact 2-Column on Mobile) */}
              {service.features && service.features.length > 0 && (
                <div className="pt-3 border-t border-[#E8DDCD]/80 space-y-2.5">
                  <h3 className="font-sans-ui text-xs font-semibold text-[#34281F] uppercase tracking-wider">
                    Signature Deliverables & Inclusions:
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 sm:p-2.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-xl hover:border-[#B88A44]/40 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-[#B88A44] shrink-0" />
                        <span className="font-sans-narrative text-[11px] sm:text-xs text-[#34281F] font-medium truncate">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Booking Panel (Shown directly after details on mobile for quick fingertip access) */}
            <div className="block lg:hidden">
              <ServiceBookingGlassPanel
                serviceTitle={service.title}
                startingPrice={service.startingPrice}
                category={service.category || service.tagline}
              />
            </div>

            {/* Visual Portfolio & Setup Gallery Showcase (Pure Sanity CMS images) */}
            <ServiceVisualShowcase service={service} sanityMediaList={sanityGalleryMedia} />

            {/* FAQ Section */}
            {service.faq && service.faq.length > 0 && (
              <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-4 shadow-2xs">
                <div className="flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#B88A44]" />
                  <h3 className="font-serif-editorial text-lg sm:text-2xl text-[#34281F]">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  {service.faq.map((item, idx) => (
                    <div key={idx} className="p-3 sm:p-4 bg-[#F5ECDD]/35 border border-[#E8DDCD] rounded-xl sm:rounded-2xl space-y-1">
                      <h4 className="font-serif-editorial text-sm sm:text-base text-[#34281F] font-medium">
                        Q: {item.question}
                      </h4>
                      <p className="font-sans-narrative text-[11px] sm:text-xs text-[#6E5D4F] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Liquid Glass Inquiry Panel (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <ServiceBookingGlassPanel
              serviceTitle={service.title}
              startingPrice={service.startingPrice}
              category={service.category || service.tagline}
            />
          </div>

        </div>

        {/* Dynamic Related Services Section */}
        <div className="mt-8 sm:mt-12">
          <RelatedServicesSection
            services={relatedServices}
            title={`More Services Related to ${service.title}`}
            subtitle="Explore complementary decor, hospitality, and event orchestration services to complete your celebration."
          />
        </div>

      </div>
    </div>
  );
}
