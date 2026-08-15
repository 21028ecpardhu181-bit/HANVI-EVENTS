'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          (!isHomePage || isScrolled)
            ? 'bg-[#FCF9F5]/95 backdrop-blur-xl shadow-xs py-2.5 sm:py-3.5 border-b border-[#E8DDCD]'
            : 'bg-gradient-to-b from-black/75 via-black/30 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <span
              className={`font-script-accent text-2xl sm:text-3xl md:text-4xl transition-colors ${
                (!isHomePage || isScrolled) ? 'text-[#B88A44]' : 'text-white'
              }`}
            >
              Hanvi Events
            </span>
            <span
              className={`hidden sm:inline-block font-sans-ui text-[10px] uppercase tracking-widest border-l pl-2 transition-colors ${
                (!isHomePage || isScrolled) ? 'text-[#B88A44] border-[#B88A44]/40' : 'text-white/80 border-white/40'
              }`}
            >
              Kakinada
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans-ui text-xs uppercase tracking-wider transition-colors relative py-1 ${
                    (!isHomePage || isScrolled)
                      ? isActive
                        ? 'text-[#B88A44] font-semibold'
                        : 'text-[#34281F] hover:text-[#B88A44]'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-[#FCF9F5]/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B88A44] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-full transition-all border cursor-pointer ${
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
              className={`p-2.5 rounded-full transition-all border ${
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
              className={`p-2.5 rounded-full transition-all border ${
                (!isHomePage || isScrolled)
                  ? 'border-[#E8DDCD] text-[#34281F] bg-[#F5ECDD]/60 hover:bg-[#B88A44] hover:text-[#FCF9F5] hover:border-[#B88A44]'
                  : 'border-white/30 text-[#FCF9F5] bg-white/10 hover:bg-white/20'
              }`}
              title="YouTube Channel"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            <EditorialButton
              variant={(!isHomePage || isScrolled) ? 'primary' : 'outline'}
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
              onClick={() => setConsultationOpen(true)}
              className={(!isHomePage || isScrolled) ? 'bg-[#B88A44] text-[#FCF9F5] hover:bg-[#34281F]' : 'text-[#FCF9F5] border-white/60 hover:bg-white hover:text-[#34281F]'}
            >
              Book Consultation
            </EditorialButton>
          </div>

          {/* Mobile Actions Header Bar */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {/* Quick Call Icon Button */}
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

            {/* Quick Search Icon Button */}
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
              className={`p-2 rounded-full min-h-[42px] min-w-[42px] flex items-center justify-center transition-colors ${
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
