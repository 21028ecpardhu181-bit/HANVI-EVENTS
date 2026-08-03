'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { crossfadeVariants } from '@/animations/variants';

export interface TestimonialsSectionProps {
  testimonialsData?: any[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonialsData }) => {
  const displayTestimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData : testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = displayTestimonials[currentIndex] || displayTestimonials[0];

  return (
    <section className="py-8 md:py-20 bg-[#F5ECDD]/40 border-y border-[#E8DDCD]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Kind Words & Appreciation"
          title="What Our Families Say"
          description="Heartfelt feedback from couples and families whose celebrations were managed by Ch. Kala Prasad."
          align="center"
        />

        <div className="mt-8 md:mt-12 max-w-4xl mx-auto bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 md:p-12 shadow-sm relative">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-[#B88A44]/15" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              variants={crossfadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-2 border-[#B88A44]">
                <ImageWithSkeleton
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.clientNames}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-1 text-[#B88A44]">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88A44]" />
                  ))}
                </div>

                <p className="font-serif-editorial text-lg md:text-2xl text-[#34281F] italic leading-relaxed">
                  "{currentTestimonial.reviewText}"
                </p>

                <div>
                  <h4 className="font-serif-editorial text-xl font-normal text-[#34281F]">
                    {currentTestimonial.clientNames}
                  </h4>
                  <span className="font-sans-ui text-xs text-[#B88A44] uppercase tracking-wider block">
                    {currentTestimonial.celebrationType} • {currentTestimonial.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#E8DDCD]">
            <div className="flex items-center space-x-2">
              {displayTestimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#B88A44]' : 'w-2 bg-[#E8DDCD]'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? displayTestimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full border border-[#E8DDCD] hover:bg-[#F5ECDD] text-[#34281F] transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length)}
                className="p-2 rounded-full border border-[#E8DDCD] hover:bg-[#F5ECDD] text-[#34281F] transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
