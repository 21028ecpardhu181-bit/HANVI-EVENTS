'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  fill = false,
  priority = false,
  sizes,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  // Embedded high-resolution luxury fallback SVG graphic for offline / blocked images
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2334281F"/><stop offset="100%" stop-color="%231F1712"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><rect x="30" y="30" width="740" height="540" fill="none" stroke="%23B88A44" stroke-width="1.5" stroke-opacity="0.4" rx="16"/><circle cx="400" cy="270" r="140" fill="none" stroke="%23B88A44" stroke-width="1.5" stroke-dasharray="6 6"/><path d="M400 160 C 360 210, 310 240, 310 290 C 310 340, 350 370, 400 370 C 450 370, 490 340, 490 290 C 490 240, 440 210, 400 160 Z" fill="none" stroke="%23B88A44" stroke-width="2"/><circle cx="400" cy="290" r="12" fill="%23B88A44"/><text x="400" y="440" font-family="Georgia, serif" font-size="32" fill="%23FCF9F5" text-anchor="middle" letter-spacing="2">Hanvi Events</text><text x="400" y="475" font-family="sans-serif" font-size="12" fill="%23B88A44" text-anchor="middle" letter-spacing="4">LUXURY CELEBRATION ARTISTRY</text></svg>`;

  const imageSrc = hasError || !src ? fallbackSvg : (src as string);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        wrapperClassName ? wrapperClassName : 'bg-transparent',
        fill ? 'absolute inset-0 w-full h-full' : ''
      )}
    >
      <img
        src={imageSrc}
        alt={alt || 'Hanvi Events Luxury Photo'}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setHasError(true)}
        className={cn(
          'transition-all duration-500 ease-out opacity-100',
          fill ? 'w-full h-full object-cover' : '',
          className
        )}
        {...props}
      />
    </div>
  );
};
