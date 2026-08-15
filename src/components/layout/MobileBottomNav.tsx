'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Sparkles, CalendarHeart, Image as ImageIcon, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { ConsultationModal } from '../modals/ConsultationModal';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const distanceFromBottom = documentHeight - currentScrollY - viewportHeight;

        // Always show near top (within 50px) or near bottom (within 200px)
        if (currentScrollY < 50 || distanceFromBottom < 200) {
          setIsVisible(true);
        }
        // Hide on scroll down past 100px, reveal on scroll up
        else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const cleanNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=Hello%20Hanvi%20Events!%20I%20want%20to%20plan%20an%20event.`, '_blank');
  };

  const NavItem = ({ href, icon: Icon, label, isActive }: { href: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; isActive: boolean }) => (
    <Link href={href} className="flex flex-col items-center justify-center flex-1 h-full min-w-[48px]" aria-label={label}>
      <div className={`p-1 rounded-full transition-colors ${isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-primary)]/60'}`}>
        <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
      </div>
      <span className={`font-sans-ui text-[10px] mt-0.5 transition-colors ${isActive ? 'text-[var(--accent-gold)] font-semibold' : 'text-[var(--text-primary)]/60'}`}>
        {label}
      </span>
    </Link>
  );

  return (
    <>
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-lg border-t border-[var(--border-color)] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        initial={false}
        animate={{
          y: isVisible ? 0 : 80,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="flex items-center justify-between h-[56px] px-2">
          <NavItem href="/" icon={Home} label="Home" isActive={pathname === '/'} />
          <NavItem href="/services" icon={Sparkles} label="Services" isActive={pathname.startsWith('/services')} />

          {/* Center Action — Elevated Book Button */}
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="flex flex-col items-center justify-center flex-1 h-full min-w-[48px] cursor-pointer"
            aria-label="Book Consultation"
          >
            <div className="p-2.5 rounded-full bg-[var(--accent-gold)] text-[var(--bg-primary)] shadow-md -mt-5 ring-4 ring-[var(--bg-primary)] hover:bg-[var(--text-primary)] transition-colors">
              <CalendarHeart className="w-5 h-5" strokeWidth={2} />
            </div>
            <span className="font-sans-ui text-[10px] mt-1 text-[var(--accent-gold)] font-semibold">
              Book
            </span>
          </button>

          <NavItem href="/gallery" icon={ImageIcon} label="Gallery" isActive={pathname.startsWith('/gallery')} />

          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center flex-1 h-full min-w-[48px] cursor-pointer"
            aria-label="Contact via WhatsApp"
          >
            <div className="p-1 rounded-full text-[#25D366]">
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="font-sans-ui text-[10px] mt-0.5 text-[#25D366]/80 font-medium">
              Chat
            </span>
          </button>
        </div>
      </motion.div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
};

