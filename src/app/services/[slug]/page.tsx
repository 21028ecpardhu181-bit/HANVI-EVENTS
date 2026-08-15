import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Phone, MessageCircle, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import { getSanityServiceBySlug, getSanityServices } from '@/lib/sanity/fetch';
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

  // Include legacy alias slugs for backward compatibility
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

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getSanityServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Hanvi Events',
      description: 'The requested event planning service could not be found.',
    };
  }

  const title = `${service.title} Services in Kakinada | Hanvi Events`;
  const description = `${service.description} Managed by Ch. Kala Prasad in Kakinada & Andhra Pradesh. Starting from ${service.startingPrice}.`;

  return createPageMetadata({
    title,
    description,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    keywords: [
      service.title,
      `${service.title} Kakinada`,
      'Hanvi Events Services',
      'Ch Kala Prasad Events',
      'Event Planning AP',
    ],
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getSanityServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = await getSanityServices();
  const relatedServices = allServices.filter((s) => s.slug !== service.slug).slice(0, 4);

  // Schema.org Service & LocalBusiness structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Hanvi Events',
      telephone: siteConfig.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kakinada',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'Offer',
      price: service.startingPrice.replace(/[^0-9]/g, '') || '15000',
      priceCurrency: 'INR',
    },
    image: service.heroImage,
  };

  return (
    <div className="pt-20 md:pt-24 pb-20 bg-[#FCF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] max-h-[600px] flex items-center justify-center bg-[#34281F]">
        <ImageWithSkeleton
          src={service.heroImage}
          alt={`${service.title} Hero Background - Hanvi Events`}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#34281F] via-[#34281F]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-[#FCF9F5] space-y-3">
          <div className="flex items-center justify-center gap-2 flex-wrap mb-2">
            <EditorialBadge variant="muted" className="text-[#FCF9F5] bg-white/10 border-white/30">
              Ch. Kala Prasad Supervision
            </EditorialBadge>
          </div>

          <span className="font-script-accent text-3xl sm:text-5xl text-[#B88A44] block">
            {service.tagline}
          </span>
          <h1 className="font-serif-editorial text-3xl sm:text-6xl font-normal leading-tight">
            {service.title}
          </h1>
          <p className="font-sans-narrative text-xs sm:text-base text-[#FCF9F5]/85 max-w-2xl mx-auto font-light leading-relaxed">
            {service.description}
          </p>

          {/* Share Button in Hero */}
          <div className="pt-4 flex justify-center">
            <ShareButton
              title={service.title}
              description={service.shortDescription || service.description}
              url={`${SITE_URL}/services/${service.slug}`}
            />
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 mt-6">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
          className="mb-6"
        />

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Features */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About Box */}
            <div className="bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#B88A44]">
                <Sparkles className="w-5 h-5" />
                <span className="font-script-accent text-xl">Service Spotlight</span>
              </div>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F]">
                About {service.title}
              </h2>
              <p className="font-sans-narrative text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
                {service.description}
              </p>
              {service.subtitle && (
                <p className="font-sans-ui text-xs text-[#34281F] font-semibold tracking-wide border-l-2 border-[#B88A44] pl-3 py-1 bg-[#B88A44]/10 rounded-r-lg">
                  {service.subtitle}
                </p>
              )}
            </div>

            {/* What We Provide / Decor Features */}
            {service.features && service.features.length > 0 && (
              <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                <h3 className="font-serif-editorial text-2xl text-[#34281F]">
                  What We Provide & Signature Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-4 bg-[#F5ECDD]/30 border border-[#E8DDCD] rounded-2xl hover:border-[#B88A44]/40 transition-colors"
                    >
                      <Check className="w-4 h-4 text-[#B88A44] shrink-0 mt-0.5" />
                      <span className="font-sans-narrative text-xs sm:text-sm text-[#34281F] font-medium leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual Portfolio & Setup Gallery Showcase */}
            <ServiceVisualShowcase service={service} />

            {/* FAQ Section */}
            {service.faq && service.faq.length > 0 && (
              <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#B88A44]" />
                  <h3 className="font-serif-editorial text-2xl text-[#34281F]">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-4">
                  {service.faq.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl space-y-1.5">
                      <h4 className="font-serif-editorial text-base text-[#34281F] font-semibold">
                        Q: {item.question}
                      </h4>
                      <p className="font-sans-narrative text-xs text-[#6E5D4F] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share Service Callout */}
            <div className="p-6 bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif-editorial text-lg text-[#34281F]">
                  Like this service option?
                </h4>
                <p className="font-sans-narrative text-xs text-[#6E5D4F]">
                  Share this page URL directly with family, bride, or event organizers.
                </p>
              </div>
              <ShareButton
                title={service.title}
                description={service.shortDescription || service.description}
                url={`${SITE_URL}/services/${service.slug}`}
              />
            </div>

          </div>

          {/* Right Column: Sticky Liquid Glass Inquiry Panel */}
          <div className="lg:col-span-4 sticky top-28">
            <ServiceBookingGlassPanel
              serviceTitle={service.title}
              startingPrice={service.startingPrice}
              category={service.category || service.tagline}
            />
          </div>

        </div>

        {/* Dynamic Related Services Section */}
        <div className="mt-16">
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
