'use client';

import React from 'react';
import { CulturalTheme } from '@/lib/theme/themeEngine';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

interface SignatureDetailsShowcaseProps {
  theme: CulturalTheme;
}

export const SignatureDetailsShowcase: React.FC<SignatureDetailsShowcaseProps> = () => {
  const details = [
    {
      title: 'Fresh Jasmine Strands',
      subtitle: 'Fragrant Hand-Woven Canopy',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Carved Brass Lamps',
      subtitle: 'Auspicious Warm Flames',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Handcrafted Silk Drapes',
      subtitle: 'Rich Cultural Weaves',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Crystal Chandelier Sconces',
      subtitle: 'Palace Illumination',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-4 sm:mt-8">
      {details.map((item, idx) => (
        <div
          key={idx}
          className="group bg-[#FCF9F5] border border-[#E8DDCD] rounded-2xl overflow-hidden shadow-2xs hover:shadow-sm hover:border-[#B88A44]/50 transition-all flex flex-col justify-between"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8DDCD]/30">
            <ImageWithSkeleton
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-2.5 sm:p-4 space-y-0.5">
            <h4 className="font-serif-editorial text-xs sm:text-base text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors truncate">
              {item.title}
            </h4>
            <span className="font-sans-narrative text-[10px] sm:text-xs text-[#6E5D4F] block truncate">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
