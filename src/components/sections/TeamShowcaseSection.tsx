'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Sparkles } from 'lucide-react';
import { TeamMember } from '@/lib/types';
import { SectionHeader } from '../ui/SectionHeader';
import { EditorialBadge } from '../ui/EditorialBadge';
import { EditorialButton } from '../ui/EditorialButton';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { staggerContainerVariants, fadeUpVariants } from '@/animations/variants';

interface TeamShowcaseSectionProps {
  members: TeamMember[];
  showTitle?: boolean;
}

export const TeamShowcaseSection: React.FC<TeamShowcaseSectionProps> = ({
  members,
  showTitle = true,
}) => {
  return (
    <section className="py-12 md:py-24 bg-[#FCF9F5] border-t border-[#E8DDCD]/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {showTitle && (
          <SectionHeader
            scriptEyebrow="Master Artisans & Event Directors"
            title="Meet Our Studio Team"
            description="Directing bespoke marriages, mandaps, sangeet galas & milestone celebrations across Kakinada & Andhra Pradesh."
            align="center"
          />
        )}

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 md:mt-14"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeUpVariants}
              className="group bg-[#F5ECDD]/40 border border-[#E8DDCD] hover:border-[#B88A44]/70 rounded-3xl overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-500 flex flex-col justify-between relative"
            >
              <Link
                href={`/team/${member.slug}`}
                aria-label={`View profile of ${member.name}`}
                className="block flex-grow flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#B88A44] rounded-3xl"
              >
                <div>
                  {/* Profile Image Banner */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#34281F]">
                    <ImageWithSkeleton
                      src={member.profileImage}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Featured / Category Pill */}
                    <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                      {member.featured && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-[10px] uppercase tracking-wider font-semibold shadow-md">
                          <Sparkles className="w-3 h-3 fill-white" />
                          <span>Featured Leader</span>
                        </span>
                      )}
                      <EditorialBadge variant="gold" className="text-[10px] bg-black/60 text-white border-white/20">
                        {member.category || 'Core Team'}
                      </EditorialBadge>
                    </div>

                    {member.experience && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#34281F]/80 backdrop-blur-md text-[#FCF9F5] font-sans-ui text-[11px] border border-white/20">
                          <Award className="w-3 h-3 text-[#B88A44]" />
                          <span>{member.experience}</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#34281F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>

                  {/* Profile Info Content */}
                  <div className="p-6 md:p-8 space-y-3">
                    <span className="font-script-accent text-xl text-[#B88A44] block">
                      {member.role}
                    </span>

                    <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#34281F] font-normal leading-tight group-hover:text-[#B88A44] transition-colors">
                      {member.name}
                    </h3>

                    <p className="font-sans-narrative text-xs md:text-sm text-[#6E5D4F] leading-relaxed line-clamp-3">
                      {member.shortBio}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 md:px-8 pb-6 pt-2 border-t border-[#E8DDCD]/80 flex items-center justify-between">
                  <span className="font-sans-ui text-xs uppercase font-semibold text-[#34281F] group-hover:text-[#B88A44] flex items-center gap-1.5 transition-colors">
                    <span>View Profile</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88A44]" />
                  </span>
                  {member.skills && member.skills.length > 0 && (
                    <span className="font-sans-ui text-[11px] text-[#59624C] font-medium">
                      {member.skills[0]}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {showTitle && (
          <div className="mt-12 text-center">
            <Link href="/team">
              <EditorialButton variant="secondary" size="md">
                Meet Entire Studio Team →
              </EditorialButton>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
