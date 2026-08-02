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
