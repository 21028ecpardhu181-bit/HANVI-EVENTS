import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { staticProjects } from '@/lib/data/projects';
import { getBreadcrumbSchema } from '@/lib/seo';
import { Sparkles, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

export const metadata: Metadata = {
  title: 'Real Event Projects & Case Studies — Hanvi Events Kakinada',
  description:
    'Explore real event case studies managed by Hanvi Events in Kakinada and East Godavari. Documented weddings, traditional mandap setups, birthday celebrations, and corporate galas.',
  alternates: {
    canonical: 'https://www.hanvievents.com/projects',
  },
};

export default function ProjectsPage() {
  const publishedProjects = staticProjects.filter((p) => p.published);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects & Case Studies', url: '/projects' },
  ]);

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={14} className="text-[#B88A44]" />
            <span className="font-sans-ui text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Documented Event Portfolio
            </span>
          </div>

          <h1 className="font-serif-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#34281F]">
            Real Event Projects & Case Studies
          </h1>

          <p className="font-sans-narrative text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
            Real celebrations executed in Kakinada and coastal Andhra Pradesh. Each project documents our venue setup, floral architecture, and client feedback.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E8DDCD] rounded-2xl overflow-hidden shadow-xs hover:border-[#B88A44]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={project.photos[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#34281F]/80 backdrop-blur-md text-white text-[10px] uppercase font-sans-ui px-2.5 py-1 rounded-full font-bold">
                    {project.eventType}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#B88A44] font-sans-ui">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {project.date}
                    </span>
                  </div>

                  <h2 className="font-serif-editorial text-xl font-semibold text-[#34281F] leading-snug">
                    {project.title}
                  </h2>

                  <p className="font-sans-narrative text-xs text-[#6E5D4F] line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.services.slice(0, 2).map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#FCF9F5] border border-[#E8DDCD] text-[10px] text-[#6E5D4F]"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link href={`/projects/${project.slug}`} className="block w-full">
                  <EditorialButton variant="outline" size="sm" className="w-full justify-between text-xs py-2">
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </EditorialButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
