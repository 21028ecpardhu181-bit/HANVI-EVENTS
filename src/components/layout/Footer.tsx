'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Heart, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { footerLinks } from '@/lib/data/navigation';
import { InstagramIcon, YoutubeIcon } from '../ui/BrandIcons';
import { EditorialButton } from '../ui/EditorialButton';

export const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#34281F] text-[#FCF9F5] pt-12 md:pt-20 pb-24 md:pb-10 border-t border-[#B88A44]/30 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-12 pb-10 border-b border-[#FCF9F5]/10">

          {/* Brand & Manager Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-script-accent text-3xl text-[#B88A44]">Hanvi Events</span>
              <span className="font-serif-editorial text-xs tracking-widest uppercase text-[#FCF9F5]/80 -mt-1 font-medium">
                {siteConfig.tagline}
              </span>
            </div>

            <p className="font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/70 leading-relaxed max-w-sm">
              Managed by <strong className="text-[#B88A44] font-semibold">{siteConfig.founder} (Event Manager)</strong>. Designing bespoke marriages, sangeet, cradle ceremonies, birthdays & corporate galas since 2018.
            </p>

            {/* Quick Phone Pills */}
            <div className="pt-1 flex flex-col space-y-1.5 font-sans-ui text-xs text-[#FCF9F5]/90">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Call: <a href="tel:+919700929650" className="hover:text-[#B88A44] font-medium min-h-[32px] inline-flex items-center">+91 97009 29650</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#59624C]" />
                <span>WhatsApp: <a href="https://wa.me/916305457612" target="_blank" rel="noopener noreferrer" className="hover:text-[#B88A44] font-medium min-h-[32px] inline-flex items-center">+91 63054 57612</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#B88A44]" />
                <span>Studio: <a href="tel:+918374527954" className="hover:text-[#B88A44] font-medium min-h-[32px] inline-flex items-center">+91 83745 27954</a></span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-2 rounded-full bg-[#FCF9F5]/10 hover:bg-[#B88A44] text-[#FCF9F5] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-2 rounded-full bg-[#FCF9F5]/10 hover:bg-[#B88A44] text-[#FCF9F5] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Wedding Traditions Column */}
          <div className="lg:col-span-3 border-t border-[#FCF9F5]/10 md:border-none pt-4 md:pt-0">
            <button 
              className="w-full flex items-center justify-between md:hidden py-2 min-h-[48px]"
              onClick={() => toggleSection('experiences')}
              aria-expanded={openSection === 'experiences'}
            >
              <h4 className="font-serif-editorial text-lg text-[#B88A44] m-0">Wedding Traditions</h4>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'experiences' ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden md:block font-serif-editorial text-lg text-[#B88A44] mb-3">Wedding Traditions</h4>
            <ul className={`space-y-3 md:space-y-2 font-sans-narrative text-sm text-[#FCF9F5]/80 overflow-hidden transition-all duration-300 ${openSection === 'experiences' ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'}`}>
              {footerLinks.experiences.map((item, idx) => (
                <li key={`exp-${idx}`}>
                  <Link href={item.href} className="hover:text-[#B88A44] transition-colors inline-block min-h-[24px]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 border-t border-[#FCF9F5]/10 md:border-none pt-4 md:pt-0">
            <button 
              className="w-full flex items-center justify-between md:hidden py-2 min-h-[48px]"
              onClick={() => toggleSection('quickLinks')}
              aria-expanded={openSection === 'quickLinks'}
            >
              <h4 className="font-serif-editorial text-lg text-[#B88A44] m-0">Quick Links</h4>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'quickLinks' ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden md:block font-serif-editorial text-lg text-[#B88A44] mb-3">Quick Links</h4>
            <ul className={`space-y-3 md:space-y-2 font-sans-narrative text-sm text-[#FCF9F5]/80 overflow-hidden transition-all duration-300 ${openSection === 'quickLinks' ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'}`}>
              {footerLinks.company.map((item, idx) => (
                <li key={`comp-${idx}`}>
                  <Link href={item.href} className="hover:text-[#B88A44] transition-colors inline-block min-h-[24px]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Address Column */}
          <div className="lg:col-span-3 border-t border-[#FCF9F5]/10 md:border-none pt-4 md:pt-0">
            <button 
              className="w-full flex items-center justify-between md:hidden py-2 min-h-[48px]"
              onClick={() => toggleSection('studio')}
              aria-expanded={openSection === 'studio'}
            >
              <h4 className="font-serif-editorial text-lg text-[#B88A44] m-0">Kakinada Studio</h4>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'studio' ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden md:block font-serif-editorial text-lg text-[#B88A44] mb-3">Kakinada Studio</h4>
            
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'studio' ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'}`}>
              <div className="font-sans-narrative text-sm text-[#FCF9F5]/80 space-y-3 md:space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#B88A44] shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </div>
                <div className="flex items-center space-x-2 pt-1">
                  <Mail className="w-4 h-4 text-[#B88A44] shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline min-h-[32px] inline-flex items-center">{siteConfig.email}</a>
                </div>
              </div>

              <div className="pt-4 md:pt-2">
                <Link href="/contact" className="block w-full">
                  <EditorialButton variant="outline" size="sm" className="w-full text-[#FCF9F5] border-[#B88A44]">
                    Visit Kakinada Studio
                  </EditorialButton>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs font-sans-narrative text-[#FCF9F5]/60 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Hanvi Events. All rights reserved. Managed by Ch. Kala Prasad.</p>
          <p className="flex items-center gap-1 justify-center md:justify-start">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in Kakinada, Andhra Pradesh
          </p>
        </div>

      </div>
    </footer>
  );
};
