'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Award, MessageCircle, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { ConsultationModal } from '../modals/ConsultationModal';

export const QuickEventSearch: React.FC = () => {
  const [eventType, setEventType] = useState('Marriage & Mandap Setup');
  const [decorQuality, setDecorQuality] = useState('Royal Grand Mandap & Multi-Tier Decor');
  const [eventDate, setEventDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppQuote = () => {
    const cleanWhatsApp = siteConfig.whatsapp.replace(/[^0-9]/g, '') || '916305457612';
    const text = encodeURIComponent(
      `Hello Hanvi Events! I am looking for ${eventType} (${decorQuality}) on ${eventDate || 'an upcoming date'}. Please share package options and availability.`
    );
    window.open(`https://wa.me/${cleanWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="relative z-30 max-w-5xl mx-auto px-3 sm:px-4 -mt-8 sm:-mt-14 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 md:p-7 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <span className="p-1 rounded-full bg-[#B88A44]/15 text-[#B88A44]">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <h3 className="font-serif-editorial text-lg sm:text-2xl text-[#34281F] font-semibold">
              Instant Availability & Quote Check
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
            {/* 1. Event Type Dropdown */}
            <div className="space-y-1">
              <label className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block">
                1. Celebration Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-2.5 bg-[#F5ECDD]/80 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs sm:text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
              >
                <option value="Marriage & Mandap Setup">Marriage & Mandap Setup</option>
                <option value="Birthday Party & Balloon Decor">Birthday Party & Balloon Decor</option>
                <option value="Sangeet, Mehandi & Nail Art">Sangeet, Mehandi & Nail Art</option>
                <option value="Welcome Girls & Hostesses">Welcome Girls & Hostesses Stall</option>
                <option value="Cradle Ceremony & Naming">Cradle Ceremony (Barasala)</option>
                <option value="Corporate Event & Galas">Corporate Event & Galas</option>
              </select>
            </div>

            {/* 2. Decor Scale & Quality Level Dropdown */}
            <div className="space-y-1">
              <label className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block flex items-center gap-1">
                <Award className="w-3 h-3 text-[#B88A44]" />
                <span>2. Decor & Staging Scale</span>
              </label>
              <select
                value={decorQuality}
                onChange={(e) => setDecorQuality(e.target.value)}
                className="w-full p-2.5 bg-[#F5ECDD]/80 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs sm:text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
              >
                <option value="Royal Grand Mandap & Multi-Tier Decor">Royal Grand Mandap & Multi-Tier Decor</option>
                <option value="Premium Luxury Stage & Floral Staging">Premium Luxury Stage & Floral Staging</option>
                <option value="Classic Boutique Celebration Decor">Classic Boutique Celebration Decor</option>
                <option value="Custom Theme & Surprise Setup">Custom Theme & Surprise Setup</option>
              </select>
            </div>

            {/* 3. Event Date Input */}
            <div className="space-y-1">
              <label className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F] font-semibold block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#B88A44]" />
                <span>3. Target Date (Approx)</span>
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-2 bg-[#F5ECDD]/80 border border-[#E8DDCD] rounded-xl font-sans-narrative text-xs sm:text-sm text-[#34281F] focus:outline-none focus:border-[#B88A44] cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Action Buttons (2-Column on Mobile, Side by Side) */}
          <div className="mt-3.5 pt-3 border-t border-[#E8DDCD] flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <span className="font-sans-narrative text-[11px] text-[#6E5D4F] hidden sm:inline">
              ✨ Managed by <strong>Ch. Kala Prasad</strong> • Kakinada, East Godavari & AP
            </span>

            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="px-4 py-2.5 rounded-xl bg-[#59624C] hover:bg-[#4A533E] text-white font-sans-ui text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Quote</span>
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#B88A44] hover:bg-[#A37736] text-white font-sans-ui text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Call</span>
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
