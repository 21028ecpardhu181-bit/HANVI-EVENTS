import { Testimonial } from '../types';

/**
 * Client Testimonials Registry
 *
 * EVIDENCE-SAFE POLICY:
 * In accordance with the SEO Evidence Register, customer reviews and testimonials
 * are published only with verified client permissions, documented first-party sources,
 * and direct links to live Google Business Profile reviews.
 * Unverified placeholders and stock avatars have been removed.
 */
export const testimonials: Testimonial[] = [];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials;
}
