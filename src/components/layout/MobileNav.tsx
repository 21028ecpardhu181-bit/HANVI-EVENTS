'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { mainNavLinks } from '@/lib/data/navigation';
import { siteConfig } from '@/lib/data/site';
import { InstagramIcon, YoutubeIcon } from '../ui/BrandIcons';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

const navItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.06,
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-scroll-locked');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('body-scroll-locked');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('body-scroll-locked');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — warm tint like candlelight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[#34281F]/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Drawer — feels like opening a wedding invitation */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 bottom-0 right-0 z-[70] flex flex-col bg-[var(--bg-primary)] w-[85vw] max-w-sm md:hidden overflow-y-auto shadow-2xl"
          >
            {/* Header — Brand Identity */}
            <div className="px-6 pt-6 pb-5 border-b border-[var(--border-color)]">
              <div className="flex items-start justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="font-script-accent text-3xl text-[var(--accent-gold)] leading-none">
                    Hanvi
                  </span>
                  <span className="font-serif-editorial text-[10px] tracking-[0.3em] uppercase text-[var(--text-primary)]/70 mt-0.5 font-medium">
                    Events Studio
                  </span>
                </motion.div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-[var(--surface)] text-[var(--text-primary)] min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Warm greeting — luxury touch */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-serif-editorial text-sm text-[var(--text-primary)]/60 mt-3 italic"
              >
                Curating celebrations that become cherished memories.
              </motion.p>
            </div>

            {/* Navigation — Large editorial typography */}
            <nav className="flex flex-col px-6 py-6 space-y-1 flex-1">
              {mainNavLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between min-h-[52px] px-3 py-2 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[var(--surface)] text-[var(--accent-gold)]'
                          : 'text-[var(--text-primary)] hover:bg-[var(--surface)]/50'
                      }`}
                    >
                      <span className="font-serif-editorial text-xl tracking-wide font-normal">
                        {link.label}
                      </span>
                      {isActive && (
                        <ArrowRight className="w-4 h-4 text-[var(--accent-gold)]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions — Elegant & purposeful */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="px-6 pb-8 pt-4 border-t border-[var(--border-color)] space-y-3 mt-auto"
            >
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full min-h-[48px] px-5 py-3.5 bg-[var(--accent-gold)] text-[var(--bg-primary)] rounded-xl font-sans-ui text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[var(--text-primary)]"
              >
                <Calendar className="w-4 h-4" />
                Begin Your Celebration
              </button>

              <div className="grid grid-cols-4 gap-1.5">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="min-h-[48px] px-1.5 py-2 bg-[var(--surface)] text-[var(--text-primary)] rounded-xl font-sans-ui text-[10px] font-medium flex flex-col items-center justify-center gap-1 transition-colors hover:bg-[var(--border-color)]"
                  aria-label="Call Hanvi Events"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  Call
                </a>
                <a
                  href={siteConfig.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-1.5 py-2 bg-[var(--surface)] text-[var(--text-primary)] rounded-xl font-sans-ui text-[10px] font-medium flex flex-col items-center justify-center gap-1 transition-colors hover:bg-[var(--border-color)]"
                  aria-label="WhatsApp Hanvi Events"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-1.5 py-2 bg-[var(--surface)] text-[var(--text-primary)] rounded-xl font-sans-ui text-[10px] font-medium flex flex-col items-center justify-center gap-1 transition-colors hover:bg-[var(--border-color)]"
                  aria-label="Hanvi Events on Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  Insta
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-1.5 py-2 bg-[var(--surface)] text-[var(--text-primary)] rounded-xl font-sans-ui text-[10px] font-medium flex flex-col items-center justify-center gap-1 transition-colors hover:bg-[var(--border-color)]"
                  aria-label="Hanvi Events on YouTube"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                  YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
