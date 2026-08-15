'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data/site';
import { staggerContainerVariants, fadeUpVariants } from '@/animations/variants';

export const TrustIndicatorsSection: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-[#F5ECDD]/60 border-y border-[#E8DDCD] relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
        >
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={fadeUpVariants}
              className={`w-full bg-[#FCF9F5] border border-[#E8DDCD] rounded-xl sm:rounded-2xl p-2.5 sm:p-5 text-center shadow-xs hover:border-[#B88A44]/50 transition-all duration-300 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <span className="font-serif-editorial text-xl sm:text-3xl md:text-4xl text-[#34281F] font-semibold block tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans-ui text-[10px] sm:text-xs uppercase tracking-wider text-[#B88A44] font-semibold block mt-0.5 sm:mt-1">
                {stat.label}
              </span>
              <span className="font-sans-narrative text-[9px] sm:text-xs text-[#6E5D4F] block mt-0.5 line-clamp-1 sm:line-clamp-none">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
