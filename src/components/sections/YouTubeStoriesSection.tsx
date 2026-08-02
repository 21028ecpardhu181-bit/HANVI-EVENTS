'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialButton } from '../ui/EditorialButton';
import { fadeInUpVariants, staggerContainerVariants } from '@/animations/variants';
import { YoutubeIcon } from '../ui/BrandIcons';

const youtubeVideos = [
  {
    id: 'yt-1',
    title: 'Ananya & Rahul — Rajahmundry Royal Wedding Highlight Film',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    duration: '4:20',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 'yt-2',
    title: 'Kavya & David — Visakhapatnam Cathedral & Ocean Gala',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    duration: '5:15',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 'yt-3',
    title: 'Srikant & Swathi — Grand Sangeet Night & Mandap Artistry',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    duration: '3:45',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
];

export const YouTubeStoriesSection: React.FC = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <section className="relative py-10 md:py-20 bg-[#FCF9F5]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          
          <SectionHeader
            scriptEyebrow="Stories Come Alive in Cinema"
            title="Watch Our Celebration Films"
            description="Experience the laughter, Vedic mantras, and emotional flower rain captured in 4K cinema quality."
            align="center"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-12"
          >
            {youtubeVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={fadeInUpVariants}
                onClick={() => setActiveVideoUrl(video.videoUrl)}
                className="w-full group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#34281F] shadow-sm hover:shadow-hover transition-all duration-500 cursor-pointer"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <ImageWithSkeleton
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B88A44] text-[#FCF9F5] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 md:w-6 md:h-6 fill-[#FCF9F5] ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white font-sans-ui text-[10px]">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-[#FCF9F5] border-t border-[#E8DDCD]">
                  <h3 className="font-serif-editorial text-base sm:text-lg md:text-xl text-[#34281F] font-medium group-hover:text-[#B88A44] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
              <EditorialButton variant="secondary" size="md" icon={<YoutubeIcon className="w-4 h-4 text-red-600" />}>
                Visit Our Official YouTube Channel
              </EditorialButton>
            </a>
          </div>

        </div>
      </section>

      <AnimatePresence>
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video"
            >
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-sans-ui text-xs uppercase cursor-pointer"
              >
                Close Video
              </button>
              <iframe
                className="w-full h-full"
                src={activeVideoUrl}
                title="Hanvi Events Cinema"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
