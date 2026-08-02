import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from './client';

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  if (!source) return '';
  return builder.image(source).auto('format').fit('max');
}
