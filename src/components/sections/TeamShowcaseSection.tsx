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
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 mt-6 md:mt-14"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeUpVariants}
              className="group bg-[#F5ECDD]/40 border border-[#E8DDCD] hover:border-[#B88A44]/70 rounded-2xl md:rounded-3xl overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-500 flex flex-col justify-between relative"
            >
              <Link
                href={`/team/${member.slug}`}
                aria-label={`View profile of ${member.name}`}
                className="block flex-grow flex flex-col justify-between h-full focus:outline-none focus:ring-2 focus:ring-[#B88A44] rounded-2xl md:rounded-3xl"
              >
                <div>
                  {/* Profile Image Banner */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#34281F]">
                    <ImageWithSkeleton
                      src={member.profileImage}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Featured / Category Pill */}
                    <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex flex-wrap gap-1.5">
                      {member.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#B88A44] text-[#FCF9F5] font-sans-ui text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold shadow-md">
                          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white" />
                          <span className="hidden sm:inline">Featured Leader</span>
                          <span className="sm:hidden">Leader</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Profile Info Content */}
                  <div className="p-3 sm:p-6 md:p-8 space-y-1.5 sm:space-y-3">
                    <span className="font-script-accent text-xs sm:text-xl text-[#B88A44] block truncate">
                      {member.role}
                    </span>

                    <h3 className="font-serif-editorial text-sm sm:text-2xl md:text-3xl text-[#34281F] font-medium leading-tight group-hover:text-[#B88A44] transition-colors line-clamp-1 sm:line-clamp-none">
                      {member.name}
                    </h3>

                    <p className="font-sans-narrative text-[10px] sm:text-xs md:text-sm text-[#6E5D4F] leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {member.shortBio}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-3 sm:px-6 md:px-8 pb-3 sm:pb-6 pt-1.5 sm:pt-2 border-t border-[#E8DDCD]/80 flex items-center justify-between">
                  <span className="font-sans-ui text-[10px] sm:text-xs uppercase font-semibold text-[#34281F] group-hover:text-[#B88A44] flex items-center gap-1 transition-colors">
                    <span>View Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B88A44]" />
                  </span>
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
