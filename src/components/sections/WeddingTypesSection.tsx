'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { weddingExperienceTypes } from '@/lib/data/celebrations';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { staggerContainerVariants, fadeUpVariants } from '@/animations/variants';

export const WeddingTypesSection: React.FC = () => {
  return (
    <section className="py-10 md:py-24 bg-[#F5ECDD]/40 border-y border-[#E8DDCD]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Vedic, Cathedral & Royal Heritage"
          title="Choose Your Wedding Tradition"
          description="Whether a grand Telugu Vedic mandap, an ivory cathedral archway, or a royal Nikah gala, we honor sacred rituals with bespoke spatial design."
          align="center"
        />

        {/* 3 Apple-Style Interactive Cards — Entire Card is Clickable! */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-14"
        >
          {weddingExperienceTypes.map((exp) => (
            <motion.div key={exp.id} variants={fadeUpVariants}>
              <Link
                href={`/wedding-experiences/${exp.slug}`}
                className="group block relative bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#B88A44]/60 transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <ImageWithSkeleton
                    src={exp.heroImage}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <EditorialBadge variant="gold" className="text-[10px] px-2.5 py-0.5 bg-black/50 backdrop-blur-md text-white border-white/20">
                      {exp.shortTitle}
                    </EditorialBadge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34281F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-script-accent text-xl text-[#B88A44] block">
                      {exp.subtitle}
                    </span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors mt-1">
                      {exp.title}
                    </h3>
                    <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] leading-relaxed mt-2.5 line-clamp-3">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#E8DDCD]/80">
                    <span className="font-sans-ui text-xs uppercase tracking-wider text-[#34281F] group-hover:text-[#B88A44] font-semibold flex items-center gap-1.5 transition-colors">
                      <span>Explore Tradition</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#B88A44]" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
