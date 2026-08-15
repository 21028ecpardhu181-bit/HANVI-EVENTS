'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
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
    <footer className="bg-[#34281F] text-[#FCF9F5] pt-6 sm:pt-12 md:pt-16 pb-20 md:pb-10 border-t border-[#B88A44]/30 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-12 pb-6 md:pb-10 border-b border-[#FCF9F5]/10">

          {/* Brand & Manager Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-baseline justify-between md:justify-start md:space-x-3">
              <span className="font-script-accent text-2xl sm:text-3xl text-[#B88A44]">Hanvi Events</span>
              <span className="font-serif-editorial text-[10px] sm:text-xs tracking-widest uppercase text-[#FCF9F5]/70 font-medium">
                {siteConfig.tagline}
              </span>
            </div>

            <p className="font-sans-narrative text-[11px] sm:text-sm text-[#FCF9F5]/70 leading-relaxed max-w-sm">
              Managed by <strong className="text-[#B88A44] font-semibold">{siteConfig.founder} (Event Manager)</strong>. Designing bespoke marriages, sangeet, cradle ceremonies & galas since 2018.
            </p>

            {/* Quick Phone Pills (2-column on mobile) */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans-ui text-xs text-[#FCF9F5]/90">
              <a
                href="tel:+919700929650"
                className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88A44] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B88A44] shrink-0" />
                <span className="truncate">Call: +91 97009 29650</span>
              </a>
              <a
                href="https://wa.me/916305457612"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span className="truncate">WhatsApp: +91 63054 57612</span>
              </a>
            </div>

            <div className="flex items-center space-x-2 pt-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FCF9F5]/10 hover:bg-[#B88A44] text-[#FCF9F5] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FCF9F5]/10 hover:bg-[#B88A44] text-[#FCF9F5] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Wedding Traditions Column (Accordion on mobile) */}
          <div className="lg:col-span-3 border-t border-[#FCF9F5]/10 md:border-none pt-2 md:pt-0">
            <button 
              className="w-full flex items-center justify-between md:hidden py-2 cursor-pointer"
              onClick={() => toggleSection('experiences')}
              aria-expanded={openSection === 'experiences'}
            >
              <h4 className="font-serif-editorial text-sm sm:text-lg text-[#B88A44] m-0 font-medium">Wedding Traditions</h4>
              <ChevronDown className={`w-4 h-4 text-[#B88A44] transition-transform duration-300 ${openSection === 'experiences' ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden md:block font-serif-editorial text-lg text-[#B88A44] mb-3">Wedding Traditions</h4>
            <ul className={`space-y-2 font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/80 overflow-hidden transition-all duration-300 ${openSection === 'experiences' ? 'max-h-96 pt-2 pb-3' : 'max-h-0 md:max-h-none'}`}>
              {footerLinks.experiences.map((item, idx) => (
                <li key={`exp-${idx}`}>
                  <Link href={item.href} className="hover:text-[#B88A44] transition-colors inline-block py-0.5">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (Accordion on mobile) */}
          <div className="lg:col-span-2 border-t border-[#FCF9F5]/10 md:border-none pt-2 md:pt-0">
            <button 
              className="w-full flex items-center justify-between md:hidden py-2 cursor-pointer"
              onClick={() => toggleSection('quickLinks')}
              aria-expanded={openSection === 'quickLinks'}
            >
              <h4 className="font-serif-editorial text-sm sm:text-lg text-[#B88A44] m-0 font-medium">Quick Links</h4>
              <ChevronDown className={`w-4 h-4 text-[#B88A44] transition-transform duration-300 ${openSection === 'quickLinks' ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden md:block font-serif-editorial text-lg text-[#B88A44] mb-3">Quick Links</h4>
            <ul className={`space-y-2 font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/80 overflow-hidden transition-all duration-300 ${openSection === 'quickLinks' ? 'max-h-96 pt-2 pb-3' : 'max-h-0 md:max-h-none'}`}>
              {footerLinks.company.map((item, idx) => (
                <li key={`comp-${idx}`}>
                  <Link href={item.href} className="hover:text-[#B88A44] transition-colors inline-block py-0.5">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Address Column (Accordion on mobile) */}
          <div className="lg:col-span-3 border-t border-[#FCF9F5]/10 md:border-none pt-2 md:pt-0">
            <button 
              className="w-full flex items-center justify-between md:hidden py-2 cursor-pointer"
              onClick={() => toggleSection('studio')}
              aria-expanded={openSection === 'studio'}
            >
              <h4 className="font-serif-editorial text-sm sm:text-lg text-[#B88A44] m-0 font-medium">Kakinada Studio</h4>
              <ChevronDown className={`w-4 h-4 text-[#B88A44] transition-transform duration-300 ${openSection === 'studio' ? 'rotate-180' : ''}`} />
            </button>
            <h4 className="hidden md:block font-serif-editorial text-lg text-[#B88A44] mb-3">Kakinada Studio</h4>
            
            <div className={`overflow-hidden transition-all duration-300 ${openSection === 'studio' ? 'max-h-96 pt-2 pb-3' : 'max-h-0 md:max-h-none'}`}>
              <div className="font-sans-narrative text-xs sm:text-sm text-[#FCF9F5]/80 space-y-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 group hover:text-[#B88A44] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B88A44] shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </a>
                <div className="flex items-center space-x-2 pt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[#B88A44] shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
                </div>
              </div>

              <div className="pt-3 md:pt-2">
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <EditorialButton variant="outline" size="sm" className="w-full text-[#FCF9F5] border-[#B88A44] text-[11px] py-2">
                    Visit Store in Google Maps
                  </EditorialButton>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans-narrative text-[#FCF9F5]/60 gap-2 text-center md:text-left">
          <p>© {new Date().getFullYear()} Hanvi Events. Managed by Ch. Kala Prasad.</p>
          <p className="flex items-center gap-1 justify-center md:justify-start">
            handcrafted with ❤️ by genz creations
          </p>
        </div>

      </div>
    </footer>
  );
};
