'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { EditorialButton } from '../ui/EditorialButton';
import { ConsultationModal } from '../modals/ConsultationModal';
import { fadeInUpVariants } from '@/animations/variants';

export const EmotionalCtaSection: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 md:py-36 bg-[#34281F] text-[#FCF9F5] overflow-hidden">
        {/* Subtle Paper Grain */}
        <div className="absolute inset-0 opacity-5 pointer-events-none paper-texture" />

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 text-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUpVariants}
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            <span className="font-script-accent text-3xl md:text-5xl text-[#B88A44] mb-3">
              Let's Create Your Next Memory
            </span>

            <h2 className="font-serif-editorial text-2xl md:text-7xl font-normal leading-[1.1] tracking-tight">
              Ready to Design an Unforgettable Celebration?
            </h2>

            <p className="font-sans-narrative text-xs md:text-lg text-[#FCF9F5]/80 leading-relaxed mt-4 md:mt-6 max-w-2xl font-light">
              Connect directly with Hanvi’s senior event directors. We reserve dates up to 12 months in advance to ensure complete creative focus for your family.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <EditorialButton
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4" />}
                onClick={() => setConsultationOpen(true)}
                className="bg-[#B88A44] text-[#FCF9F5] hover:bg-[#FCF9F5] hover:text-[#34281F] border-[#B88A44] w-full sm:w-auto"
              >
                Book Private Consultation
              </EditorialButton>

              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <EditorialButton
                  variant="outline"
                  size="lg"
                  icon={<MessageCircle className="w-4 h-4 text-[#66785F]" />}
                  className="text-[#FCF9F5] border-white/40 hover:bg-white/10 w-full sm:w-auto"
                >
                  Chat on WhatsApp
                </EditorialButton>
              </a>

              <a href={`tel:${siteConfig.phoneRaw}`} className="w-full sm:w-auto">
                <EditorialButton
                  variant="ghost"
                  size="lg"
                  icon={<Phone className="w-4 h-4 text-[#B88A44]" />}
                  className="text-[#FCF9F5] hover:bg-white/10 w-full sm:w-auto"
                >
                  Call {siteConfig.phone}
                </EditorialButton>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};
