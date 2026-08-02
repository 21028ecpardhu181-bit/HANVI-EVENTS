import { defineType, defineField } from 'sanity';

export const weddingTraditionType = defineType({
  name: 'weddingTradition',
  title: 'Wedding Traditions Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'traditionTitle',
      title: 'Tradition Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'traditionTitle', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region / Cultural Heritage',
      type: 'string',
      initialValue: 'Telugu Vedic & South Indian',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Link (YouTube / Vimeo)',
      type: 'url',
    }),
    defineField({
      name: 'rituals',
      title: 'Rituals & Event Flow',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'traditionTitle',
      subtitle: 'region',
      media: 'coverImage',
    },
  },
});
