import React from 'react';
import type { Metadata } from 'next';
import { galleryItems } from '@/lib/data/gallery';
import { getSanityGalleryMedia } from '@/lib/sanity/fetch';
import { LightboxMedia } from '@/components/ui/LightboxModal';
import { GalleryClientView } from './GalleryClientView';
import { createPageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = createPageMetadata({
  title: 'Mandap & Decor Fine Art Gallery | Hanvi Events Kakinada',
  description: 'Curated gallery of sacred mandaps, floral sculptures, reception stages, and grand entrances managed by Ch. Kala Prasad in Kakinada & Andhra Pradesh.',
  path: '/gallery',
  keywords: ['Mandap Gallery Kakinada', 'Floral Decor Gallery', 'Hanvi Events Gallery', 'Telugu Wedding Photography Kakinada'],
});

export default async function GalleryPage() {
  const sanityMedia = await getSanityGalleryMedia();

  const mediaSource = (sanityMedia && sanityMedia.length > 0) ? sanityMedia : galleryItems;

  const initialItems: LightboxMedia[] = mediaSource.map((m, idx) => {
    const format = m.type || (m.videoUrl ? 'reel' : 'image');
    const cover = ('thumbnail' in m ? m.thumbnail : ('image' in m ? m.image : '')) || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop';
    const rawImages = ('images' in m && Array.isArray(m.images)) ? m.images : [];
    const imgs = rawImages.length > 0 ? rawImages : [cover];
    const loc = ('subtitle' in m ? m.subtitle : ('location' in m ? m.location : '')) || 'Kakinada Event';

    return {
      id: m.id || `gallery-item-${idx}`,
      title: m.title || 'Event Celebration',
      category: m.category || 'Mandap',
      image: cover,
      images: imgs,
      location: loc,
      videoUrl: m.videoUrl || '',
      type: format,
      isVideo: format === 'reel' || format === 'film' || Boolean(m.videoUrl),
    };
  });

  return <GalleryClientView initialItems={initialItems} />;
}
