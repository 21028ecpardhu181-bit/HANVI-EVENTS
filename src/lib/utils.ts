import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string) {
  if (price.startsWith('₹') || price.toLowerCase().includes('custom')) {
    return price;
  }
  return `₹${price}`;
}

/**
 * Convert any YouTube URL (standard watch, shorts, share, embed, youtu.be) into an embeddable YouTube URL.
 * Supports both standard YouTube videos and YouTube Shorts.
 */
export function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();

  // 1. YouTube Shorts: youtube.com/shorts/VIDEO_ID or youtu.be/shorts/VIDEO_ID
  const shortsMatch = cleanUrl.match(/(?:youtube\.com|youtu\.be)\/shorts\/([a-zA-Z0-9_-]+)/i);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?autoplay=1&rel=0`;
  }

  // 2. Standard watch URL, shortened youtu.be, or embed URL
  const standardMatch = cleanUrl.match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/i);
  if (standardMatch && standardMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${standardMatch[1]}?autoplay=1&rel=0`;
  }

  // 3. Already an embed URL
  if (cleanUrl.includes('youtube.com/embed/') || cleanUrl.includes('youtube-nocookie.com/embed/')) {
    return cleanUrl.includes('autoplay=1') ? cleanUrl : `${cleanUrl}${cleanUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0`;
  }

  return null;
}

