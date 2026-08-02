'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { ConsultationModal } from '../modals/ConsultationModal';
import { InstagramIcon } from './BrandIcons';

export const FloatingActions: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-30 hidden md:flex flex-col space-y-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setConsultationOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-[#34281F] text-[#FCF9F5] rounded-full shadow-[0_12px_32px_-4px_rgba(52,40,31,0.25)] border border-[#B88A44]/40 font-sans-ui text-xs uppercase tracking-wider font-semibold cursor-pointer hover:bg-[#B88A44] transition-colors"
        >
          <Calendar className="w-4 h-4 text-[#B88A44]" />
          <span>Book Consultation</span>
        </motion.button>

        <div className="flex items-center justify-end space-x-2">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={siteConfig.social.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#59624C] text-[#FCF9F5] rounded-full shadow-lg hover:bg-[#66785F] transition-colors"
            title="WhatsApp Consultation"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`tel:${siteConfig.phoneRaw}`}
            className="p-3 bg-[#B88A44] text-[#FCF9F5] rounded-full shadow-lg hover:bg-[#a27838] transition-colors"
            title="Call Studio"
          >
            <Phone className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#C68F87] text-[#FCF9F5] rounded-full shadow-lg hover:bg-[#b57d75] transition-colors"
            title="Instagram Portfolio"
          >
            <InstagramIcon className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};
