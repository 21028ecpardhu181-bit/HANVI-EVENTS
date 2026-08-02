'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/animations/variants';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  scriptEyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  scriptEyebrow,
  title,
  description,
  align = 'center',
  className,
  isDark = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUpVariants}
      className={cn('flex flex-col max-w-3xl mb-12 md:mb-16', alignmentClasses[align], className)}
    >
      {scriptEyebrow && (
        <span className="font-script-accent text-2xl md:text-3xl text-[#B88A44] mb-1 font-normal tracking-wide">
          {scriptEyebrow}
        </span>
      )}
      <h2 className={cn('font-serif-editorial text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight', isDark ? 'text-[#FCF9F5]' : 'text-[#34281F]')}>
        {title}
      </h2>
      {description && (
        <p className={cn('font-sans-narrative text-sm md:text-base leading-relaxed mt-4 font-normal max-w-2xl', isDark ? 'text-[#FCF9F5]/80' : 'text-[#6E5D4F]')}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
