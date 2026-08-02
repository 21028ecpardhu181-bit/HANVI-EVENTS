'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { packageTiers } from '@/lib/data/packages';
import { SectionHeader } from '../ui/SectionHeader';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { staggerContainerVariants, fadeUpVariants, crossfadeVariants } from '@/animations/variants';

export const PackagesSection: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState(packageTiers[1].id); // Default to 'Elegant' (Most Popular)
  const activeTier = packageTiers.find((t) => t.id === activeTierId) || packageTiers[1];

  return (
    <section className="py-8 md:py-20 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Transparent Investment Tiers"
          title="Celebration Experience Packages"
          description="Bespoke packages designed by Ch. Kala Prasad for marriages, birthdays, sangeet, and corporate events."
          align="center"
        />

        {/* 3-Column Bento Segmented Selector on Mobile — Zero Side Scroll! */}
        <div className="md:hidden grid grid-cols-3 gap-2 mt-4 max-w-4xl mx-auto w-full">
          {packageTiers.map((tier) => {
            const isActive = activeTierId === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`w-full px-2 py-2.5 rounded-xl font-sans-ui text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-center leading-tight min-h-[44px] flex flex-col items-center justify-center ${
                  isActive
                    ? 'bg-[#34281F] text-[#FCF9F5] shadow-md font-semibold'
                    : 'bg-[#F5ECDD]/60 text-[#6E5D4F] border border-[#E8DDCD]'
                }`}
              >
                <span className="font-semibold block">{tier.title.split(' ')[0]}</span>
                <span className="text-[9px] opacity-80 block mt-0.5">{tier.price}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Card Showcase (1 Active Tier Card) */}
        <div className="md:hidden mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier.id}
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`w-full relative bg-[#FCF9F5] border rounded-3xl p-5 flex flex-col justify-between transition-all duration-500 ${
                activeTier.isPopular
                  ? 'border-[#B88A44] shadow-lg bg-gradient-to-b from-[#FCF9F5] via-[#F5ECDD]/40 to-[#FCF9F5] ring-1 ring-[#B88A44]/30'
                  : 'border-[#E8DDCD] shadow-sm'
              }`}
            >
              {activeTier.badge && (
                <div className="absolute -top-3 right-4 z-10">
                  <EditorialBadge variant={activeTier.isPopular ? 'gold' : 'muted'} className="text-[10px] px-2.5 py-0.5">
                    {activeTier.badge}
                  </EditorialBadge>
                </div>
              )}

              <div>
                <div className="mb-4 pb-4 border-b border-[#E8DDCD]">
                  <span className="font-script-accent text-2xl text-[#B88A44]">
                    {activeTier.title}
                  </span>
                  <h3 className="font-serif-editorial text-3xl text-[#34281F] font-normal mt-0.5">
                    {activeTier.price}
                  </h3>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1 leading-relaxed">
                    {activeTier.tagline}
                  </p>
                </div>

                <ul className="space-y-2.5 font-sans-narrative text-xs text-[#34281F]">
                  {activeTier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-[#B88A44] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-4">
                <Link href="/packages" className="block w-full">
                  <EditorialButton
                    variant={activeTier.isPopular ? 'primary' : 'outline'}
                    className="w-full justify-center text-xs py-3"
                  >
                    View Package Details
                  </EditorialButton>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop 3-Column Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-6xl mx-auto"
        >
          {packageTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={fadeUpVariants}
              className={`w-full relative bg-[#FCF9F5] border rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                tier.isPopular
                  ? 'border-[#B88A44] shadow-xl bg-gradient-to-b from-[#FCF9F5] via-[#F5ECDD]/40 to-[#FCF9F5] ring-2 ring-[#B88A44]/30 scale-[1.03] z-10'
                  : 'border-[#E8DDCD] shadow-sm hover:shadow-hover'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 right-6 z-10">
                  <EditorialBadge variant={tier.isPopular ? 'gold' : 'muted'}>
                    {tier.badge}
                  </EditorialBadge>
                </div>
              )}

              <div>
                <div className="mb-6 pb-6 border-b border-[#E8DDCD]">
                  <span className="font-script-accent text-2xl text-[#B88A44]">
                    {tier.title}
                  </span>
                  <h3 className="font-serif-editorial text-4xl text-[#34281F] font-normal mt-1">
                    {tier.price}
                  </h3>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-2 leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                <ul className="space-y-3 font-sans-narrative text-sm text-[#34281F]">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-[#B88A44] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4">
                <Link href="/packages" className="block w-full">
                  <EditorialButton
                    variant={tier.isPopular ? 'primary' : 'outline'}
                    className="w-full justify-center"
                  >
                    View Package Details
                  </EditorialButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 md:mt-12 text-center">
          <Link href="/packages">
            <EditorialButton variant="secondary" size="md">
              Compare Full Feature Matrix →
            </EditorialButton>
          </Link>
        </div>

      </div>
    </section>
  );
};
