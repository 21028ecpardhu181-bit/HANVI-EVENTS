import { defineType, defineField } from 'sanity';

export const galleryMediaType = defineType({
  name: 'galleryMedia',
  title: 'Gallery Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'albumTitle',
      title: 'Album / Media Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Mandap', 'Florals', 'Lighting', 'Stage', 'Entrance'] },
      initialValue: 'Mandap',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover / Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Images Array',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'videos',
      title: 'Videos Array (URLs)',
      type: 'array',
      of: [{ type: 'url' }],
    }),
    defineField({
      name: 'eventName',
      title: 'Event Name / Location',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Item',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / Display in Gallery',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle off to hide this item from the public gallery page',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / Sort Order',
      type: 'number',
      initialValue: 1,
      description: 'Lower numbers appear first in the gallery stream and grid',
    }),
    defineField({
      name: 'type',
      title: 'Media Format (reel, film, image)',
      type: 'string',
      options: { list: ['reel', 'film', 'image'] },
      initialValue: 'image',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Single Video Link',
      type: 'url',
    }),
    defineField({
      name: 'views',
      title: 'Views / Duration Tag',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'albumTitle',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
});
