'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { fadeInUpVariants, staggerContainerVariants } from '@/animations/variants';

const craftPillars = [
  {
    icon: <Flower className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Fresh Floral Sculpting',
    description: 'Fresh Rajanigandha, Dutch white roses, yellow marigolds, and seasonal blooms hand-woven on-site.',
  },
  {
    icon: <Compass className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Spatial & Mandap Architecture',
    description: 'Precision scale modeling and custom timber/steel fabrication creating safe, photogenic mandaps.',
  },
  {
    icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Warm Directional Lighting',
    description: 'Warm 2700K ambient illumination and intelligent spotlighting designed specifically for cinema camera dynamic range.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Flawless Logistics & Execution',
    description: 'On-site contingency directors, quiet coordination crews, and rigorous quality control ensuring zero delays.',
  },
];

export const OurCraftSection: React.FC = () => {
  return (
    <section className="relative py-8 md:py-24 bg-[#FCF9F5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
          
          {/* Left Craft Story */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="font-script-accent text-2xl md:text-3xl text-[#B88A44]">Perfection lies in every detail</span>
              <h2 className="font-serif-editorial text-2xl md:text-5xl text-[#34281F] font-normal leading-tight mt-1">
                Our Craftsmanship & Artistry
              </h2>
            </div>
            
            <p className="font-sans-narrative text-xs md:text-base text-[#6E5D4F] leading-relaxed">
              Hanvi does not assemble off-the-shelf stage props. We design bespoke spatial installations tailored to your venue architecture, cultural rituals, and aesthetic vision.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainerVariants}
              className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 pt-2"
            >
              {craftPillars.map((pillar, idx) => (
                <motion.div key={idx} variants={fadeInUpVariants} className="flex flex-col sm:flex-row items-start gap-2 sm:space-x-4 bg-[#F5ECDD]/40 border border-[#E8DDCD] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                  <div className="p-1.5 sm:p-2.5 rounded-xl bg-[#F5ECDD] border border-[#E8DDCD] shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-serif-editorial text-xs sm:text-lg text-[#34281F] font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="font-sans-narrative text-[10px] sm:text-xs text-[#6E5D4F] leading-relaxed mt-0.5 line-clamp-2 sm:line-clamp-none">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Immersive Editorial Image Grid */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-hover border border-[#E8DDCD]">
              <ImageWithSkeleton
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
                alt="Hanvi Floral Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
