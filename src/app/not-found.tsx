'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <EditorialBadge variant="gold">404 • Page Not Found</EditorialBadge>

        <div className="w-16 h-16 rounded-full bg-[#B88A44]/10 text-[#B88A44] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <h1 className="font-serif-editorial text-4xl text-[#34281F]">
          A Moment Lost in Time
        </h1>

        <p className="font-sans-narrative text-sm text-[#6E5D4F] leading-relaxed">
          The page or celebration guide you are looking for may have moved or been updated. Return to our homepage to explore our bespoke portfolio.
        </p>

        <div className="pt-4">
          <Link href="/">
            <EditorialButton variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
              Return to Homepage
            </EditorialButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
