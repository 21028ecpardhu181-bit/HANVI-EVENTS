'use client';

import React from 'react';
import { CulturalTheme } from '@/lib/theme/themeEngine';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';

interface SignatureDetailsShowcaseProps {
  theme: CulturalTheme;
}

export const SignatureDetailsShowcase: React.FC<SignatureDetailsShowcaseProps> = ({ theme }) => {
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
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {details.map((item, idx) => (
        <div
          key={idx}
          className="group bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <ImageWithSkeleton
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-4 space-y-1">
            <h4 className="font-serif-editorial text-base sm:text-lg text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors">
              {item.title}
            </h4>
            <span className="font-sans-narrative text-xs text-[#6E5D4F] block">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
