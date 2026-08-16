'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Award, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { ConsultationModal } from '../modals/ConsultationModal';

export const QuickEventSearch: React.FC = () => {
  const [eventType, setEventType] = useState('Marriage & Mandap Setup');
  const [decorQuality, setDecorQuality] = useState('Royal Grand Mandap & Multi-Tier Decor');
  const [eventDate, setEventDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppQuote = () => {
    const cleanWhatsApp = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Hanvi Events! I am looking for ${eventType} (${decorQuality}) on ${eventDate || 'upcoming date'}. Please share package options and availability.`
    );
    window.open(`https://wa.me/${cleanWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="relative z-30 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-14 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-4 md:p-7 py-5 md:py-8 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="p-1.5 rounded-full bg-[#B88A44]/15 text-[#B88A44]">
              <Sparkles className="w-4 h-4" />
            </span>
            <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#34281F] font-semibold">
              What are you celebrating?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
            {/* 1. Event Type Dropdown */}
            <div className="space-y-1.5">
              <label className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-medium block">
                1. What event are you planning?
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-2 md:p-3 bg-[#F5ECDD]/80 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-xs sm:text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer accent-[#B88A44]"
              >
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Marriage & Mandap Setup">Marriage & Mandap Setup</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Birthday Party & Balloon Decor">Birthday Party & Balloon Decor</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Sangeet, Mehandi & Nail Art">Sangeet, Mehandi & Nail Art</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Welcome Girls & Hostesses">Welcome Girls & Hostesses Stall</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Cradle Ceremony & Naming">Cradle Ceremony (Cradle Setup)</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Corporate Event & Galas">Corporate Event & Galas</option>
              </select>
            </div>

            {/* 2. Decor Quality & Scale Level Dropdown */}
            <div className="space-y-1.5">
              <label className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-medium block flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>2. Decor Scale & Quality Level</span>
              </label>
              <select
                value={decorQuality}
                onChange={(e) => setDecorQuality(e.target.value)}
                className="w-full p-2 md:p-3 bg-[#F5ECDD]/80 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-xs sm:text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer accent-[#B88A44]"
              >
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Royal Grand Mandap & Multi-Tier Decor">Royal Grand Mandap & Multi-Tier Decor</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Premium Luxury Stage & Floral Staging">Premium Luxury Stage & Floral Staging</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Classic Boutique Celebration Decor">Classic Boutique Celebration Decor</option>
                <option className="bg-[#FCF9F5] text-[#34281F] py-2" value="Custom Theme & Surprise Setup">Custom Theme & Surprise Setup</option>
              </select>
            </div>

            {/* 3. Event Date Input */}
            <div className="space-y-1.5">
              <label className="font-sans-ui text-[11px] uppercase tracking-wider text-[#6E5D4F] font-medium block flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>3. Event Date (Approx)</span>
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-2 md:p-3 bg-[#F5ECDD]/80 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-xs sm:text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-5 pt-4 border-t border-[#E8DDCD]/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-sans-narrative text-xs text-[#6E5D4F]">
              ✨ Managed by <strong>Ch. Kala Prasad</strong> • Kakinada, AP & Telangana
            </span>

            <div className="flex flex-col md:flex-row items-center gap-2.5 w-full md:w-auto">
              <button
                onClick={handleWhatsAppQuote}
                className="flex-1 sm:flex-initial px-5 h-11 md:h-14 py-3 rounded-full bg-[#25D366] w-full md:w-auto text-white font-sans-ui text-xs font-semibold uppercase tracking-wider hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Instant Quote</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-initial px-5 h-11 md:h-14 py-3 rounded-full bg-gradient-to-r from-[#B88A44] via-[#C99A4E] to-[#9E7432] w-full md:w-auto text-white font-sans-ui text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(184,138,68,0.35)]"
              >
                <span>Call Back Request</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
