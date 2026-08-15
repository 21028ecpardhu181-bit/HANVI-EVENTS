'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown, Sparkles, X, User } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { footerLinks } from '@/lib/data/navigation';
import { InstagramIcon, YoutubeIcon } from '../ui/BrandIcons';
import { EditorialButton } from '../ui/EditorialButton';

export const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showGenzCard, setShowGenzCard] = useState(false);

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
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B88A44]/50 shadow-md shrink-0">
                <Image
                  src="/logo.png"
                  alt="Hanvi Events Royal Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="font-script-accent text-2xl sm:text-3xl text-[#B88A44]">Hanvi Events</span>
                <span className="font-serif-editorial text-[10px] sm:text-xs tracking-widest uppercase text-[#FCF9F5]/70 font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
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
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#B88A44] text-[#FCF9F5] hover:text-[#B88A44] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#B88A44] text-[#FCF9F5] hover:text-[#B88A44] transition-colors"
                title="YouTube Channel"
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

              <div className="pt-3 md:pt-2 space-y-2">
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <EditorialButton variant="outline" size="sm" className="w-full text-[#FCF9F5] border-[#B88A44] text-[11px] py-2">
                    Visit Store in Google Maps
                  </EditorialButton>
                </a>
                <a href={siteConfig.social.googleReview} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <EditorialButton variant="ghost" size="sm" className="w-full text-[#B88A44] hover:text-white text-[10px] py-1 border border-[#B88A44]/30">
                    ⭐ 4.9 Rating (150+ Reviews)
                  </EditorialButton>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans-narrative text-[#FCF9F5]/60 gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} Hanvi Events. Managed by Ch. Kala Prasad.</p>
          
          {/* Handcrafted by GenZ Creations with Interactive Hover / Touch Popup */}
          <div className="relative inline-flex items-center">
            <p className="flex items-center gap-1.5 justify-center md:justify-start">
              <span>handcrafted with ❤️ by</span>
              <button
                type="button"
                onMouseEnter={() => setShowGenzCard(true)}
                onMouseLeave={() => setShowGenzCard(false)}
                onClick={() => setShowGenzCard(!showGenzCard)}
                className="group relative inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#B88A44]/20 via-[#D4A559]/30 to-[#B88A44]/20 border border-[#B88A44]/50 hover:border-[#B88A44] shadow-xs cursor-pointer transition-all duration-300 focus:outline-none"
                aria-label="View GenZ Creations Developer Details"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A559] animate-pulse" />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E6C687] via-[#FFF] to-[#D4A559] group-hover:brightness-125">
                  GenZ Creations
                </span>
                <Sparkles className="w-3 h-3 text-[#D4A559] group-hover:rotate-12 transition-transform" />
              </button>
            </p>

            {/* Floating Details Popup Card */}
            {showGenzCard && (
              <div
                onMouseEnter={() => setShowGenzCard(true)}
                onMouseLeave={() => setShowGenzCard(false)}
                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-[320px] sm:w-[380px] max-h-[80vh] overflow-y-auto bg-[#1F1915]/95 backdrop-blur-2xl border-2 border-[#B88A44] text-[#FCF9F5] p-4 sm:p-5 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] z-50 animate-in fade-in zoom-in-95 duration-200"
              >
                {/* Header with Close Button */}
                <div className="flex items-center justify-between pb-3 border-b border-[#B88A44]/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4A559] animate-pulse" />
                    <span className="font-serif-editorial text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E6C687] via-[#FFF] to-[#D4A559]">
                      GenZ Creations
                    </span>
                    <span className="text-[10px] uppercase font-sans-ui tracking-wider px-2 py-0.5 rounded-full bg-[#B88A44]/20 border border-[#B88A44]/40 text-[#E6C687]">
                      Core Team
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowGenzCard(false);
                    }}
                    className="p-1 rounded-full text-[#FCF9F5]/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Close card"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Team Members List */}
                <div className="mt-3 space-y-3">
                  {/* Member 1: K. Satish Kumar */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88A44]/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B88A44] to-[#7D5A25] flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0 ring-1 ring-[#B88A44]/40">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-serif-editorial text-sm font-semibold text-white leading-tight">
                            K. Satish Kumar
                          </h4>
                          <span className="text-[10px] text-[#D4A559] font-sans-ui">
                            GenZ Creations • Lead Engineer
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/5">
                      <a
                        href="tel:+919505683584"
                        className="font-mono text-xs text-[#E6C687] hover:underline"
                      >
                        +91 95056 83584
                      </a>
                      <div className="flex items-center gap-1.5">
                        <a
                          href="tel:+919505683584"
                          className="p-1.5 rounded-lg bg-[#B88A44] hover:bg-[#a27838] text-white transition-colors"
                          title="Call Satish Kumar"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="https://wa.me/919505683584?text=Hi%20Satish%20Kumar%20(GenZ%20Creations),%20I%20saw%20your%20work%20on%20Hanvi%20Events."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors"
                          title="WhatsApp Satish Kumar"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Member 2: S. Jagadeesh */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88A44]/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B88A44] to-[#7D5A25] flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0 ring-1 ring-[#B88A44]/40">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-serif-editorial text-sm font-semibold text-white leading-tight">
                            S. Jagadeesh
                          </h4>
                          <span className="text-[10px] text-[#D4A559] font-sans-ui">
                            GenZ Creations • Co-Developer
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/5">
                      <a
                        href="tel:+919912493997"
                        className="font-mono text-xs text-[#E6C687] hover:underline"
                      >
                        +91 99124 93997
                      </a>
                      <div className="flex items-center gap-1.5">
                        <a
                          href="tel:+919912493997"
                          className="p-1.5 rounded-lg bg-[#B88A44] hover:bg-[#a27838] text-white transition-colors"
                          title="Call S. Jagadeesh"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="https://wa.me/919912493997?text=Hi%20Jagadeesh%20(GenZ%20Creations),%20I%20saw%20your%20work%20on%20Hanvi%20Events."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors"
                          title="WhatsApp S. Jagadeesh"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Member 3: P. Pardha Saradhi */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#B88A44]/60 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B88A44] to-[#7D5A25] flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0 ring-1 ring-[#B88A44]/40">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-serif-editorial text-sm font-semibold text-white leading-tight">
                            P. Pardha Saradhi
                          </h4>
                          <span className="text-[10px] text-[#D4A559] font-sans-ui">
                            GenZ Creations • Co-Developer
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/5">
                      <a
                        href="tel:+916301659982"
                        className="font-mono text-xs text-[#E6C687] hover:underline"
                      >
                        +91 63016 59982
                      </a>
                      <div className="flex items-center gap-1.5">
                        <a
                          href="tel:+916301659982"
                          className="p-1.5 rounded-lg bg-[#B88A44] hover:bg-[#a27838] text-white transition-colors"
                          title="Call P. Pardha Saradhi"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="https://wa.me/916301659982?text=Hi%20Pardha%20Saradhi%20(GenZ%20Creations),%20I%20saw%20your%20work%20on%20Hanvi%20Events."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors"
                          title="WhatsApp P. Pardha Saradhi"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow pointer down */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#B88A44]" />
              </div>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
