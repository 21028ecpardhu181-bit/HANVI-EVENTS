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
 * Extract YouTube video ID from standard watch URL, shorts, share URL, or embed link.
 */
export function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();

  // 1. YouTube Shorts: youtube.com/shorts/VIDEO_ID or youtu.be/shorts/VIDEO_ID
  const shortsMatch = cleanUrl.match(/(?:youtube\.com|youtu\.be)\/shorts\/([a-zA-Z0-9_-]+)/i);
  if (shortsMatch && shortsMatch[1]) {
    return shortsMatch[1].split('?')[0];
  }

  // 2. Standard watch URL, shortened youtu.be, or embed URL
  const standardMatch = cleanUrl.match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/i);
  if (standardMatch && standardMatch[1]) {
    return standardMatch[1].split('&')[0].split('?')[0];
  }

  return null;
}

/**
 * Get high-quality thumbnail image for YouTube video / Shorts.
 */
export function getYouTubeThumbnail(url?: string): string | null {
  const videoId = extractYouTubeId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/**
 * Convert any YouTube URL (standard watch, shorts, share, embed, youtu.be) into an embeddable YouTube URL.
 * Supports both standard YouTube videos and YouTube Shorts.
 */
export function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();
  const videoId = extractYouTubeId(cleanUrl);

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }

  // Already an embed URL
  if (cleanUrl.includes('youtube.com/embed/')) {
    return cleanUrl;
  }

  return null;
}
