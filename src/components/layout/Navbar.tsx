'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Calendar, Search, Phone } from 'lucide-react';
import { mainNavLinks } from '@/lib/data/navigation';
import { siteConfig } from '@/lib/data/site';
import { EditorialButton } from '../ui/EditorialButton';
import { MobileNav } from './MobileNav';
import { ConsultationModal } from '../modals/ConsultationModal';
import { SearchModal } from '../ui/SearchModal';
import { InstagramIcon, YoutubeIcon } from '../ui/BrandIcons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [navLinks] = useState(mainNavLinks);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          (!isHomePage || isScrolled)
            ? 'bg-[#FCF9F5]/95 backdrop-blur-xl shadow-xs py-2 sm:py-3 border-b border-[#E8DDCD]'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-2.5 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Brand Logo & Royal Identity */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-[#B88A44] shadow-md ring-2 ring-[#B88A44]/30 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Hanvi Events Royal Logo"
                fill
                sizes="(max-width: 640px) 32px, 44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5">
                <span
                  className={`font-script-accent text-2xl sm:text-3xl md:text-4xl leading-none transition-colors ${
                    (!isHomePage || isScrolled) ? 'text-[#B88A44]' : 'text-white drop-shadow-sm'
                  }`}
                >
                  Hanvi Events
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className={`font-serif-editorial text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors ${
                    (!isHomePage || isScrolled) ? 'text-[#6E5D4F]' : 'text-white/80'
                  }`}
                >
                  Luxury Events
                </span>
                <span className="text-[#B88A44] text-[8px] sm:text-[9px]">◆</span>
                <span
                  className={`font-sans-ui text-[8px] sm:text-[9px] uppercase tracking-widest transition-colors ${
                    (!isHomePage || isScrolled) ? 'text-[#B88A44]' : 'text-[#FCF9F5]/90'
                  }`}
                >
                  Kakinada
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans-ui text-[11px] 2xl:text-xs uppercase tracking-wider transition-all relative py-1.5 font-medium ${
                    (!isHomePage || isScrolled)
                      ? isActive
                        ? 'text-[#B88A44] font-bold'
                        : 'text-[#34281F] hover:text-[#B88A44]'
                      : isActive
                      ? 'text-[#B88A44] font-bold drop-shadow-sm'
                      : 'text-[#FCF9F5]/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B88A44] rounded-full shadow-xs" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-3">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 sm:p-2.5 rounded-full transition-all border cursor-pointer ${
                (!isHomePage || isScrolled)
                  ? 'border-[#E8DDCD] text-[#34281F] bg-[#F5ECDD]/60 hover:bg-[#B88A44] hover:text-[#FCF9F5] hover:border-[#B88A44]'
                  : 'border-white/30 text-[#FCF9F5] bg-white/10 hover:bg-white/20'
              }`}
              title="Search Services (Cmd/Ctrl + K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-2.5 rounded-full transition-all border ${
                (!isHomePage || isScrolled)
                  ? 'border-[#E8DDCD] text-[#34281F] bg-[#F5ECDD]/60 hover:bg-[#B88A44] hover:text-[#FCF9F5] hover:border-[#B88A44]'
                  : 'border-white/30 text-[#FCF9F5] bg-white/10 hover:bg-white/20'
              }`}
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-2.5 rounded-full transition-all border ${
                (!isHomePage || isScrolled)
                  ? 'border-[#E8DDCD] text-[#34281F] bg-[#F5ECDD]/60 hover:bg-[#B88A44] hover:text-[#FCF9F5] hover:border-[#B88A44]'
                  : 'border-white/30 text-[#FCF9F5] bg-white/10 hover:bg-white/20'
              }`}
              title="YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-sans-ui text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-[#B88A44] via-[#C99C55] to-[#B88A44] text-white shadow-md hover:shadow-lg hover:shadow-[#B88A44]/30 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Actions Header Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Call Button */}
            <a
              href="tel:+919700929650"
              className={`p-2 rounded-full min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors ${
                (!isHomePage || isScrolled)
                  ? 'text-[#B88A44] bg-[#F5ECDD]/80 hover:bg-[#B88A44] hover:text-white'
                  : 'text-white bg-black/40 border border-white/20'
              }`}
              aria-label="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-full min-h-[38px] min-w-[38px] flex items-center justify-center transition-colors ${
                (!isHomePage || isScrolled)
                  ? 'text-[#34281F] bg-[#F5ECDD]/60 hover:bg-[#B88A44] hover:text-white'
                  : 'text-white bg-black/40 border border-white/20'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className={`p-2 rounded-full min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors ${
                (!isHomePage || isScrolled)
                  ? 'text-[#34281F] bg-[#F5ECDD]/80 border border-[#E8DDCD]'
                  : 'text-white bg-black/40 border border-white/30'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </>
  );
};
