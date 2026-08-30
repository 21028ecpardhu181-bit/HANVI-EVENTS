export interface MediaItem {
  id: string;
  type: 'reel' | 'film' | 'image';
  title: string;
  subtitle: string;
  category?: string;
  thumbnail: string;
  images?: string[];
  videoUrl?: string;
  duration?: string;
  views?: string;
  createdAt?: number;
}

/**
 * EVIDENCE-SAFE MEDIA STORE:
 * Default media items are empty pending client-approved, first-party uploaded reels and cinema films.
 * Visitors are linked directly to Hanvi Events' live YouTube (@hanvievents) and Instagram channels.
 */
export const defaultMediaItems: MediaItem[] = [];

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
      const newItem = {
        ...item,
        createdAt: item.createdAt || Date.now(),
      };
      updated = [newItem, ...current];

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
