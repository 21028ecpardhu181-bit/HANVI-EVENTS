import { ServiceCategory } from '../types';
import { servicesData, getServiceBySlug as getDefaultServiceBySlug } from './services';

const CUSTOM_SERVICES_KEY = 'hanvi_custom_services';

/**
 * Get custom services saved in localStorage
 */
export function getCustomServices(): ServiceCategory[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(CUSTOM_SERVICES_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.error('Error loading custom services:', err);
  }
  return [];
}

/**
 * Save or update a custom service in localStorage
 */
export function saveCustomService(service: ServiceCategory): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getCustomServices();
    const existingIdx = current.findIndex((s) => s.id === service.id || s.slug === service.slug);

    let updated: ServiceCategory[];
    if (existingIdx >= 0) {
      updated = [...current];
      updated[existingIdx] = service;
    } else {
      updated = [service, ...current];
    }

    localStorage.setItem(CUSTOM_SERVICES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('servicesUpdated'));
  } catch (err) {
    console.error('Error saving custom service:', err);
  }
}

/**
 * Delete a custom service by ID
 */
export function deleteCustomService(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getCustomServices();
    const updated = current.filter((s) => s.id !== id);
    localStorage.setItem(CUSTOM_SERVICES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('servicesUpdated'));
  } catch (err) {
    console.error('Error deleting custom service:', err);
  }
}

/**
 * Get merged list of default services and custom admin services
 */
export function getAllMergedServices(): ServiceCategory[] {
  const custom = getCustomServices();
  if (custom.length === 0) return servicesData;

  // Merge custom services (custom takes priority if matching ID or slug)
  const mergedMap = new Map<string, ServiceCategory>();

  // Add default services first
  for (const s of servicesData) {
    mergedMap.set(s.slug, s);
  }

  // Override or add custom services
  for (const c of custom) {
    mergedMap.set(c.slug, c);
  }

  return Array.from(mergedMap.values());
}

/**
 * Get service by slug from merged dataset
 */
export function getMergedServiceBySlug(slug: string): ServiceCategory | undefined {
  const all = getAllMergedServices();
  const normalized = slug.toLowerCase().trim();
  const found = all.find((s) => s.slug === normalized);
  if (found) return found;

  return getDefaultServiceBySlug(slug);
}
