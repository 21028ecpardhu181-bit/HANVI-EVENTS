import { siteConfig } from './site';

export interface WizardConfig {
  celebrationTypes: string[];
  guestCountOptions: string[];
  budgetOptions: string[];
  whatsappNumber: string;
}

export interface WizardProgressState {
  step: number;
  celebrationType?: string;
  celebrationTypesSelected?: string[];
  customCelebrationType?: string;
  guestCount: string;
  budget: string;
  eventDate: string;
  eventTime?: string;
  venue?: string;
}

export const DEFAULT_WIZARD_CONFIG: WizardConfig = {
  celebrationTypes: [
    'Wedding',
    'Birthday',
    'Engagement',
    'Baby Shower',
    'Reception',
    'Corporate Event',
    'House Warming',
    'Anniversary',
    'Other',
  ],
  guestCountOptions: ['0-50', '50-100', '100-200', '200-500', '500+'],
  budgetOptions: [
    '₹15,000 – ₹50,000',
    '₹50,000 – ₹1 Lakh',
    '₹1 Lakh – ₹3 Lakhs',
    '₹3 Lakhs – ₹5 Lakhs',
    '₹5 Lakhs – ₹10 Lakhs+',
  ],
  whatsappNumber: siteConfig?.whatsapp ? siteConfig.whatsapp.replace(/[^0-9]/g, '') : '9700929650',
};

const CONFIG_STORAGE_KEY = 'hanvi_wizard_admin_config';
const PROGRESS_STORAGE_KEY = 'hanvi_wizard_draft_progress';

/**
 * Get active Wizard configuration (localStorage or default)
 */
export function getWizardConfig(): WizardConfig {
  if (typeof window === 'undefined') return DEFAULT_WIZARD_CONFIG;
  try {
    const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        celebrationTypes: Array.isArray(parsed.celebrationTypes) && parsed.celebrationTypes.length > 0
          ? parsed.celebrationTypes
          : DEFAULT_WIZARD_CONFIG.celebrationTypes,
        guestCountOptions: Array.isArray(parsed.guestCountOptions) && parsed.guestCountOptions.length > 0
          ? parsed.guestCountOptions
          : DEFAULT_WIZARD_CONFIG.guestCountOptions,
        budgetOptions: Array.isArray(parsed.budgetOptions) && parsed.budgetOptions.length > 0
          ? parsed.budgetOptions
          : DEFAULT_WIZARD_CONFIG.budgetOptions,
        whatsappNumber: parsed.whatsappNumber || DEFAULT_WIZARD_CONFIG.whatsappNumber,
      };
    }
  } catch (err) {
    console.error('Error reading wizard config from localStorage:', err);
  }
  return DEFAULT_WIZARD_CONFIG;
}

/**
 * Save Wizard config to localStorage
 */
export function saveWizardConfig(config: WizardConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    window.dispatchEvent(new Event('wizardConfigUpdated'));
  } catch (err) {
    console.error('Error saving wizard config:', err);
  }
}

/**
 * Reset Wizard config to default
 */
export function resetWizardConfig(): WizardConfig {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(CONFIG_STORAGE_KEY);
      window.dispatchEvent(new Event('wizardConfigUpdated'));
    } catch (err) {
      console.error('Error resetting wizard config:', err);
    }
  }
  return DEFAULT_WIZARD_CONFIG;
}

/**
 * Get saved draft wizard progress
 */
export function getSavedWizardProgress(): WizardProgressState | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.error('Error reading wizard progress:', err);
  }
  return null;
}

/**
 * Save current wizard progress to localStorage
 */
export function saveWizardProgress(state: WizardProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Error saving wizard progress:', err);
  }
}

/**
 * Clear saved wizard progress from localStorage
 */
export function clearWizardProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing wizard progress:', err);
  }
}
