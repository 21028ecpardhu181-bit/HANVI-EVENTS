'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sparkles, Compass, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { fadeInUpVariants, staggerContainerVariants } from '@/animations/variants';

const craftPillars = [
  {
    icon: <Flower className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Fresh Floral Artistry',
    description: 'Fresh Rajanigandha, Jasmine (Mallepoovu), marigolds, and seasonal blooms hand-woven for sacred Muhurthams.',
  },
  {
    icon: <Compass className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Spatial & Mandap Engineering',
    description: 'Custom steel and timber structural fabrication creating safe, photogenic traditional mandaps and stages.',
  },
  {
    icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Warm Directional Lighting',
    description: 'Warm 2700K ambient illumination and intelligent spotlighting designed for photography and cinema video capture.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#B88A44]" />,
    title: 'Structured Logistics & Coordination',
    description: 'On-site contingency management, dedicated coordination crews, and proactive schedule monitoring to keep your event on track.',
  },
];

export const OurCraftSection: React.FC = () => {
  return (
    <section className="relative py-8 md:py-24 bg-[#FCF9F5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Left Craft Story */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="font-script-accent text-2xl md:text-3xl text-[#B88A44]">
                Dedicated to cultural authenticity
              </span>
              <h2 className="font-serif-editorial text-2xl md:text-5xl text-[#34281F] font-normal leading-tight mt-1">
                Our Craftsmanship & Standards
              </h2>
            </div>

            <p className="font-sans-narrative text-xs md:text-base text-[#6E5D4F] leading-relaxed">
              Hanvi Events crafts customized spatial installations tailored to your venue architecture, cultural rituals, and celebratory vision across Kakinada, Rajahmundry, and East Godavari.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainerVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-2"
            >
              {craftPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUpVariants}
                  className="flex flex-col sm:flex-row items-start gap-2 sm:space-x-4 bg-[#F5ECDD]/40 border border-[#E8DDCD] p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                >
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

          {/* Right Editorial Studio Blueprint Card (Evidence-Safe, No Fake Stock Photo) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl md:rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#E8DDCD] pb-4">
                <div className="flex items-center gap-2 text-[#B88A44]">
                  <MapPin size={16} />
                  <span className="font-sans-ui text-xs font-bold uppercase tracking-widest">
                    Studio Blueprint
                  </span>
                </div>
                <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F]">
                  Kakinada Studio
                </span>
              </div>

              <div className="space-y-4 font-sans-narrative text-xs sm:text-sm text-[#6E5D4F]">
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-semibold">
                  Direct Leadership & On-Site Accountability
                </h3>
                <p className="leading-relaxed">
                  Every celebration is supervised under the direct operational oversight of Event Director <strong>Ch. Kala Prasad</strong>. We manage fabrication timelines, flower freshness, and vendor coordination with structured precision.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-[#E8DDCD]">
                    <CheckCircle2 size={16} className="text-[#B88A44] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#34281F] block text-xs">Vedic Ritual Alignment</strong>
                      <span className="text-[11px]">Priest coordination & Muhurtham timing</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-[#E8DDCD]">
                    <CheckCircle2 size={16} className="text-[#B88A44] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#34281F] block text-xs">Cold-Chain Florals</strong>
                      <span className="text-[11px]">Overnight setup for fresh morning flowers</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-[#E8DDCD]">
                    <CheckCircle2 size={16} className="text-[#B88A44] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#34281F] block text-xs">Truss & Stage Safety</strong>
                      <span className="text-[11px]">Heavy-duty engineering & fire safe fabrics</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-white rounded-xl border border-[#E8DDCD]">
                    <CheckCircle2 size={16} className="text-[#B88A44] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#34281F] block text-xs">Itemized Estimates</strong>
                      <span className="text-[11px]">Transparent quotes based on exact brief</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
