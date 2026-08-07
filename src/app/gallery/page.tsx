import React from 'react';
import { Metadata } from 'next';
import { galleryItems } from '@/lib/data/gallery';
import { getSanityGalleryMedia } from '@/lib/sanity/fetch';
import { LightboxMedia } from '@/components/ui/LightboxModal';
import { GalleryClientView } from './GalleryClientView';

export const metadata: Metadata = {
  title: 'Mandap & Decor Fine Art Gallery | Hanvi Events',
  description: 'Curated gallery of sacred mandaps, floral sculptures, reception stages, and grand entrances managed by Ch. Kala Prasad in Kakinada & Andhra Pradesh.',
  openGraph: {
    title: 'Mandap & Decor Fine Art Gallery | Hanvi Events',
    description: 'Curated gallery of sacred mandaps, floral sculptures, reception stages, and grand entrances.',
  },
};

export default async function GalleryPage() {
  const sanityMedia = await getSanityGalleryMedia();

  const mediaSource = (sanityMedia && sanityMedia.length > 0) ? sanityMedia : galleryItems;

  const initialItems: LightboxMedia[] = mediaSource.map((m: any, idx: number) => {
    const format = m.type || (m.videoUrl ? 'reel' : 'image');
    const cover = m.thumbnail || m.image;
    const imgs = Array.isArray(m.images) && m.images.length > 0 ? m.images : (cover ? [cover] : []);
    return {
      id: m.id || `gallery-item-${idx}`,
      title: m.title || 'Event Celebration',
      category: m.category || 'Mandap',
      image: cover,
      images: imgs,
      location: m.subtitle || m.location || '',
      videoUrl: m.videoUrl || '',
      type: format,
      isVideo: format === 'reel' || format === 'film' || Boolean(m.videoUrl),
    };
  });

  return <GalleryClientView initialItems={initialItems} />;
}
