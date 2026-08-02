import { defineType, defineField } from 'sanity';

export const storyType = defineType({
  name: 'story',
  title: 'Stories Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Story Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coupleName',
      title: 'Couple Name',
      type: 'string',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Story',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'quote',
      title: 'Couple Quote',
      type: 'text',
    }),
    defineField({
      name: 'guestCount',
      title: 'Guest Count',
      type: 'string',
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
      title: 'title',
      subtitle: 'coupleName',
      media: 'coverImage',
    },
  },
});
