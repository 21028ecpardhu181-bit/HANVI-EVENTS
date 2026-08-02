'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { SectionHeader } from '../ui/SectionHeader';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { EditorialButton } from '../ui/EditorialButton';
import { fadeInUpVariants, staggerContainerVariants } from '@/animations/variants';
import { InstagramIcon } from '../ui/BrandIcons';

const instagramPosts = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    likes: '2.4k',
    caption: 'Sacred Muhurtham Mandap wrapped in 40,000 jasmine strands by the Godavari River ✨ #HanviEvents',
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    likes: '1.9k',
    caption: 'Ecuadorian white roses & candlelit aisle for Kavya & David’s coastal wedding 🌹',
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    likes: '3.1k',
    caption: 'Multi-tier crystal chandelier stage design for a grand reception gala ✨',
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    likes: '1.7k',
    caption: 'Vibrant marigolds & traditional brass uruli lamps for Haldi ritual blessings 💛',
  },
];

export const InstagramReelsSection: React.FC = () => {
  return (
    <section className="relative py-10 md:py-20 bg-[#F5ECDD]/30 border-y border-[#E8DDCD]/60 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        <SectionHeader
          scriptEyebrow="Follow our daily behind-the-scenes artistry"
          title="Latest on Instagram"
          description="Behind every photo is a story of craft, devotion, and family happiness."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-12"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUpVariants}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#34281F] shadow-sm hover:shadow-hover transition-all duration-500 w-full"
            >
              <ImageWithSkeleton
                src={post.image}
                alt="Hanvi Instagram Reel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#34281F]/90 via-[#34281F]/20 to-transparent opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-sans-narrative text-[11px] sm:text-xs text-white/90 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <div className="mt-1.5 flex items-center justify-between font-sans-ui text-[10px] uppercase tracking-wider text-[#B88A44]">
                  <span>{post.likes} Likes</span>
                  <span className="flex items-center gap-1 group-hover:underline">
                    View Reel <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
            <EditorialButton variant="outline" size="md" icon={<InstagramIcon className="w-4 h-4" />}>
              Follow @hanvievents on Instagram
            </EditorialButton>
          </a>
        </div>

      </div>
    </section>
  );
};
