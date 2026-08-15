import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Award, Mail, Phone, MessageCircle, Sparkles, Video, Image as ImageIcon } from 'lucide-react';
import { getSanityTeamMemberBySlug, getSanityTeamMembers } from '@/lib/sanity/fetch';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getYouTubeEmbedUrl } from '@/lib/utils';
import { SITE_URL, createPageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await getSanityTeamMemberBySlug(slug);

  if (!member) {
    return {
      title: 'Team Member Not Found | Hanvi Events',
    };
  }

  const isFounder = member.slug === 'ch-kala-prasad' || member.name.toLowerCase().includes('kala prasad');
  const title = isFounder
    ? 'Ch. Kala Prasad — Event Director & Founder | Hanvi Events'
    : member.seoTitle || `${member.name} — ${member.role} | Hanvi Events`;
  const description = member.seoDescription || member.shortBio || `${member.name}, ${member.role} at Hanvi Events Kakinada.`;

  return createPageMetadata({
    title,
    description,
    path: `/team/${member.slug}`,
    image: member.profileImage,
    keywords: [
      member.name,
      `${member.name} Kakinada`,
      `${member.role}`,
      'Hanvi Events',
      'Event Management Kakinada',
    ],
  });
}

export async function generateStaticParams() {
  const members = await getSanityTeamMembers();
  return members.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = await getSanityTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  // Schema.org Person JSON-LD
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Hanvi Events',
      url: SITE_URL,
    },
    image: member.profileImage,
    description: member.shortBio,
    telephone: member.contactInfo?.phone,
    email: member.contactInfo?.email,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="pt-24 pb-24 bg-[#FCF9F5]">
        
        {/* Cover Hero Banner */}
        <div className="relative w-full h-[350px] md:h-[480px] bg-[#34281F] overflow-hidden">
          <ImageWithSkeleton
            src={member.coverImage || member.profileImage}
            alt={`${member.name} Banner`}
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F5] via-[#34281F]/40 to-black/60" />

          <div className="absolute top-28 left-4 md:left-12 z-20">
            <Link
              href="/team"
              className="inline-flex items-center space-x-2 text-xs font-sans-ui uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-[#B88A44] transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Team Directory</span>
            </Link>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 -mt-24 md:-mt-32 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar Profile Card */}
            <div className="lg:col-span-4 bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
              
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-[#34281F]">
                <ImageWithSkeleton
                  src={member.profileImage}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                {member.featured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-[10px] uppercase font-semibold shadow-md">
                      <Sparkles className="w-3.5 h-3.5 fill-white" />
                      <span>Featured Director</span>
                    </span>
                  </div>
                )}
              </div>

              <div>
                <EditorialBadge variant="gold">{member.category || 'Core Team'}</EditorialBadge>
                <h1 className="font-serif-editorial text-3xl md:text-4xl text-[#34281F] font-normal mt-2">
                  {member.name}
                </h1>
                <p className="font-script-accent text-xl text-[#B88A44] mt-1">
                  {member.role}
                </p>
              </div>

              {member.experience && (
                <div className="flex items-center space-x-3 p-4 bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl">
                  <Award className="w-6 h-6 text-[#B88A44] shrink-0" />
                  <div>
                    <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#B88A44] font-semibold block">Experience</span>
                    <span className="font-sans-narrative text-sm font-semibold text-[#34281F]">{member.experience}</span>
                  </div>
                </div>
              )}

              {/* Contact Information Card */}
              {member.contactInfo && (
                <div className="space-y-3 pt-4 border-t border-[#E8DDCD]">
                  <h3 className="font-sans-ui text-xs uppercase tracking-wider font-semibold text-[#34281F]">Direct Contact</h3>
                  
                  {member.contactInfo.phone && (
                    <a href={`tel:${member.contactInfo.phone}`} className="flex items-center space-x-3 p-3 bg-[#F5ECDD]/40 rounded-xl hover:bg-[#F5ECDD] text-xs font-sans-narrative text-[#34281F] transition-colors">
                      <Phone className="w-4 h-4 text-[#B88A44]" />
                      <span>{member.contactInfo.phone}</span>
                    </a>
                  )}

                  {member.contactInfo.whatsapp && (
                    <a href={`https://wa.me/${member.contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-[#F5ECDD]/40 rounded-xl hover:bg-[#F5ECDD] text-xs font-sans-narrative text-[#34281F] transition-colors">
                      <MessageCircle className="w-4 h-4 text-[#59624C]" />
                      <span>WhatsApp Direct</span>
                    </a>
                  )}

                  {member.contactInfo.email && (
                    <a href={`mailto:${member.contactInfo.email}`} className="flex items-center space-x-3 p-3 bg-[#F5ECDD]/40 rounded-xl hover:bg-[#F5ECDD] text-xs font-sans-narrative text-[#34281F] transition-colors">
                      <Mail className="w-4 h-4 text-[#B88A44]" />
                      <span>{member.contactInfo.email}</span>
                    </a>
                  )}
                </div>
              )}

              {/* Social Media Links */}
              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="pt-4 border-t border-[#E8DDCD]">
                  <h3 className="font-sans-ui text-xs uppercase tracking-wider font-semibold text-[#34281F] mb-3">Connect Online</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.socialLinks.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full bg-[#F5ECDD]/80 border border-[#E8DDCD] hover:border-[#B88A44] hover:bg-[#B88A44] hover:text-white text-xs font-sans-ui uppercase tracking-wider transition-all"
                      >
                        {s.platform}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/contact" className="block pt-2">
                <EditorialButton variant="primary" className="w-full">
                  Book Direct Consultation
                </EditorialButton>
              </Link>
            </div>

            {/* Right Main Details Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Short & Detailed Biography */}
              <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-8 md:p-10 shadow-sm space-y-6">
                <SectionHeader
                  scriptEyebrow="Artistic Statement & Directorship"
                  title={`About ${member.name}`}
                  align="left"
                />
                
                <p className="font-script-accent text-2xl text-[#B88A44] leading-relaxed">
                  "{member.shortBio}"
                </p>

                <div className="prose font-sans-narrative text-base md:text-lg text-[#6E5D4F] leading-relaxed space-y-4 pt-4 border-t border-[#E8DDCD]">
                  {member.detailedBio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Skills & Specialization */}
              {member.skills && member.skills.length > 0 && (
                <div className="bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl p-8 shadow-xs space-y-4">
                  <h3 className="font-serif-editorial text-2xl text-[#34281F]">Skills & Specialization</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-xl bg-[#FCF9F5] border border-[#E8DDCD] font-sans-narrative text-sm text-[#34281F] font-medium shadow-xs"
                      >
                        ✨ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Multiple Gallery Showcase */}
              {member.galleryImages && member.galleryImages.length > 0 && (
                <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-8 shadow-xs space-y-6">
                  <div className="flex items-center space-x-3">
                    <ImageIcon className="w-5 h-5 text-[#B88A44]" />
                    <h3 className="font-serif-editorial text-2xl text-[#34281F]">Portfolio Gallery</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {member.galleryImages.map((imgUrl, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm bg-[#34281F]">
                        <ImageWithSkeleton
                          src={imgUrl}
                          alt={`${member.name} Gallery ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Multiple Videos Showcase */}
              {member.videos && member.videos.length > 0 && (
                <div className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-8 shadow-xs space-y-6">
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-[#B88A44]" />
                    <h3 className="font-serif-editorial text-2xl text-[#34281F]">Showcase Videos</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {member.videos.map((v: any, idx: number) => {
                      const videoUrl = typeof v === 'string' ? v : (v?.url || v?.videoUrl || v?.src || v?.assetUrl || v?.fileUrl || '');
                      const videoTitle = (typeof v === 'object' && v?.title) ? v.title : `Showcase Video ${idx + 1}`;
                      if (!videoUrl) return null;

                      const ytEmbed = getYouTubeEmbedUrl(videoUrl);
                      const vimeoMatch = videoUrl.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/i);

                      return (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-sans-ui text-xs font-semibold text-[#34281F] uppercase tracking-wider block">
                              {videoTitle}
                            </span>
                            {ytEmbed && (
                              <a
                                href={videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-sans-ui text-[#B88A44] hover:underline flex items-center gap-1"
                              >
                                <span>Watch on YouTube</span>
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-md border border-[#E8DDCD]">
                            {ytEmbed ? (
                              <iframe
                                src={ytEmbed}
                                title={videoTitle}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                            ) : vimeoMatch && vimeoMatch[1] ? (
                              <iframe
                                src={`https://player.vimeo.com/video/${vimeoMatch[1]}?badge=0&autopause=0`}
                                title={videoTitle}
                                className="w-full h-full border-0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                            ) : (
                              <video controls className="w-full h-full object-cover">
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support playing this video format.
                              </video>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </>
  );
}
