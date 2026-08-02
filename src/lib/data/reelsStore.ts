export interface MediaItem {
  id: string;
  type: 'reel' | 'film';
  title: string;
  subtitle: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
  views?: string;
  createdAt?: number;
}

export const defaultMediaItems: MediaItem[] = [
  {
    id: 'm-1',
    type: 'film',
    title: 'Swathi & Rajesh’s Grand Mandap Gala',
    subtitle: 'Kakinada Convention Center • Telugu Marriage',
    thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '4:15 Cinema',
    views: '12K Views',
    createdAt: 1700000000000,
  },
  {
    id: 'm-2',
    type: 'reel',
    title: '40,000 Jasmine Strand Canopy Reveal',
    subtitle: 'Fresh Jasmine Mandap Entrance',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://linktw.in/utNIGS',
    views: '45K Reel Views',
    createdAt: 1700000001000,
  },
  {
    id: 'm-3',
    type: 'film',
    title: 'Ananya & Vikram Beachside Reception',
    subtitle: 'Novotel Beach Resort • Visakhapatnam',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '3:40 Film',
    views: '18K Views',
    createdAt: 1700000002000,
  },
  {
    id: 'm-4',
    type: 'reel',
    title: 'Surprise Balloon Arch setup for Birthday',
    subtitle: 'Kakinada Home Venue Setup',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://linktw.in/utNIGS',
    views: '28K Reel Views',
    createdAt: 1700000003000,
  },
];

const REELS_STORAGE_KEY = 'hanvi_reels_media_items';
const MAX_VIDEOS = 10;

/**
 * Get stored media items from localStorage
 */
export function getStoredMediaItems(): MediaItem[] {
  if (typeof window === 'undefined') return defaultMediaItems;
  try {
    const stored = localStorage.getItem(REELS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.error('Error reading reels media items:', err);
  }
  return defaultMediaItems;
}

/**
 * Add or update a media item. Enforces MAX 10 items limit (oldest is automatically removed).
 */
export function saveMediaItem(item: MediaItem): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredMediaItems();
    const existingIdx = current.findIndex((m) => m.id === item.id);

    let updated: MediaItem[];
    if (existingIdx >= 0) {
      updated = [...current];
      updated[existingIdx] = item;
    } else {
      // Add new item at the top (newest first)
      const newItem = {
        ...item,
        createdAt: item.createdAt || Date.now(),
      };
      updated = [newItem, ...current];

      // Auto-prune if total count exceeds MAX_VIDEOS (10)
      if (updated.length > MAX_VIDEOS) {
        updated = updated.slice(0, MAX_VIDEOS);
      }
    }

    localStorage.setItem(REELS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('reelsUpdated'));
  } catch (err) {
    console.error('Error saving media item:', err);
  }
}

/**
 * Delete a media item by ID
 */
export function deleteMediaItem(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredMediaItems();
    const updated = current.filter((m) => m.id !== id);
    localStorage.setItem(REELS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('reelsUpdated'));
  } catch (err) {
    console.error('Error deleting media item:', err);
  }
}

/**
 * Reset media items to default
 */
export function resetMediaItems(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(REELS_STORAGE_KEY);
    window.dispatchEvent(new Event('reelsUpdated'));
  } catch (err) {
    console.error('Error resetting media items:', err);
  }
}
