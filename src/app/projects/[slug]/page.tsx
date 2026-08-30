import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { staticProjects, getProjectBySlug } from '@/lib/data/projects';
import { getBreadcrumbSchema } from '@/lib/seo';
import { Sparkles, MapPin, Calendar, Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return staticProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.published) {
    return { title: 'Project Not Found — Hanvi Events' };
  }

  return {
    title: `${project.title} — Hanvi Events Case Study`,
    description: project.description,
    alternates: {
      canonical: `https://www.hanvievents.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.published) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-[#FCF9F5] text-[#34281F] pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 space-y-10">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs text-[#B88A44] hover:underline font-sans-ui">
          <ArrowLeft size={14} /> Back to All Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD]">
            <Sparkles size={12} className="text-[#B88A44]" />
            <span className="font-sans-ui text-[10px] sm:text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              {project.eventType} Case Study
            </span>
          </div>

          <h1 className="font-serif-editorial text-2xl sm:text-4xl text-[#34281F] font-semibold leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-[#6E5D4F] font-sans-ui border-y border-[#E8DDCD] py-3">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-[#B88A44]" /> {project.venue}, {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-[#B88A44]" /> Year: {project.date}
            </span>
            {project.guestCount && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users size={14} className="text-[#B88A44]" /> Scale: ~{project.guestCount} Guests
                </span>
              </>
            )}
          </div>
        </div>

        {/* Hero Photo */}
        <div className="relative h-[320px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#E8DDCD] shadow-sm">
          <Image
            src={project.photos[0]}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3">
              <h2 className="font-serif-editorial text-xl text-[#34281F] font-semibold">
                Event Overview
              </h2>
              <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-3">
              <h2 className="font-serif-editorial text-xl text-[#34281F] font-semibold">
                Design & Logistics Execution
              </h2>
              <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
                {project.challengeAndExecution}
              </p>
            </div>

            {project.testimonial && (
              <div className="bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl p-6 space-y-2">
                <span className="font-sans-ui text-xs uppercase text-[#B88A44] font-bold block">
                  Client Feedback
                </span>
                <p className="font-serif-editorial text-lg italic text-[#34281F]">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <p className="font-sans-ui text-xs text-[#6E5D4F] font-semibold">
                  — {project.testimonial.author}, {project.testimonial.location}
                </p>
              </div>
            )}
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="bg-white border border-[#E8DDCD] rounded-2xl p-6 space-y-4">
              <h3 className="font-serif-editorial text-lg text-[#34281F] font-semibold">
                Services Delivered
              </h3>

              <ul className="space-y-2 font-sans-narrative text-xs text-[#6E5D4F]">
                {project.services.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#B88A44] shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E8DDCD]">
                <Link href="/contact" className="block w-full">
                  <EditorialButton variant="gold" size="sm" className="w-full justify-center text-xs">
                    Inquire Similar Event
                  </EditorialButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
