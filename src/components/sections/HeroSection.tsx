'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Play, Volume2, VolumeX } from 'lucide-react';
import { heroRevealVariants } from '@/animations/variants';
import { getSanityHomeData } from '@/lib/sanity/fetch';
import { EditorialButton } from '../ui/EditorialButton';
import { EditorialBadge } from '../ui/EditorialBadge';
import { ConsultationModal } from '../modals/ConsultationModal';

export const HeroSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [homeCms, setHomeCms] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function loadHomeData() {
      const data = await getSanityHomeData();
      if (data) setHomeCms(data);
    }
    loadHomeData();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log('Autoplay handled by browser policy:', err);
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const heroSubtitle = homeCms?.heroSubtitle || 'Some celebrations last a day. Some become family history.';
  const heroTitle = homeCms?.heroTitle || 'Designing Celebrations You’ll Remember Forever';
  const heroDescription = homeCms?.heroDescription || 'From sacred Telugu Vedic mandaps & welcome girls stalls to surprise birthday arches, sangeet concerts & corporate galas in Kakinada & Andhra Pradesh.';
  const ctaPrimaryText = homeCms?.ctaPrimaryText || 'Book Consultation →';

  return (
    <>
      <section className="relative w-full h-[65vh] min-h-[340px] md:h-screen md:min-h-[580px] md:max-h-[1080px] flex items-center justify-center overflow-hidden bg-[#34281F]">
        
        {/* Fullscreen High-Clarity Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#34281F]/90 via-[#34281F]/60 to-[#34281F]/70 pointer-events-none" />

        {/* Sound Toggle Floating Button */}
        <button
          onClick={toggleSound}
          className="hidden md:flex absolute top-24 right-6 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-[#FCF9F5] hover:bg-[#B88A44] hover:border-[#B88A44] transition-all cursor-pointer shadow-lg"
          title={isMuted ? 'Unmute Video' : 'Mute Video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 text-center text-[#FCF9F5] flex flex-col items-center pt-12 md:pt-20">
          <motion.div
            variants={heroRevealVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center max-w-4xl"
          >
            <EditorialBadge variant="gold" className="hidden md:inline-flex mb-3 bg-black/40 border-white/20">
              Hanvi Events • Managed by Ch. Kala Prasad
            </EditorialBadge>

            <span className="font-script-accent text-xl md:text-3xl sm:text-4xl text-[#B88A44] mb-2 font-normal tracking-wide drop-shadow-md">
              {heroSubtitle}
            </span>

            <h1 className="font-serif-editorial text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight text-[#FCF9F5] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              {heroTitle}
            </h1>

            <p className="font-sans-narrative text-[11px] md:text-base line-clamp-2 md:line-clamp-none text-[#FCF9F5]/90 leading-relaxed mt-4 md:mt-6 max-w-2xl font-light tracking-wide drop-shadow-md">
              {heroDescription}
            </p>

            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <EditorialButton
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4" />}
                onClick={() => setConsultationOpen(true)}
                className="w-full sm:w-auto bg-[#B88A44] text-[11px] py-2.5 px-6 md:px-8 md:py-4 text-[#FCF9F5] hover:bg-[#34281F] border-[#B88A44] shadow-xl"
              >
                {ctaPrimaryText}
              </EditorialButton>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="hidden md:flex w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-[#FCF9F5] hover:bg-white hover:text-[#34281F] font-sans-ui text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg group"
              >
                <span>Watch Story →</span>
                <Play className="w-4 h-4 text-[#B88A44] fill-[#B88A44] group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

      </section>

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white/20 text-white rounded-full font-sans-ui text-xs uppercase cursor-pointer hover:bg-white/40"
              >
                Close Cinema
              </button>
              <video controls autoPlay className="w-full h-full object-cover">
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
