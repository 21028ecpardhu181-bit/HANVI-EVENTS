'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919849012345?text=Hello%20Hanvi%20Events!%20I%20would%20like%20to%20inquire%20about%20event%20planning%20and%20availability.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Ch. Kala Prasad"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
};
