'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';
import { SmoothScrollProvider } from '../providers/SmoothScrollProvider';

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main className="w-full min-h-screen bg-[#101112]">{children}</main>;
  }

  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="flex-grow w-full relative">{children}</main>
      <Footer />
      <MobileBottomNav />
    </SmoothScrollProvider>
  );
}
