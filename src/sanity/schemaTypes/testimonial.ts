import { defineType, defineField } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coupleName',
      title: 'Couple Name',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1 - 5)',
      type: 'number',
      initialValue: 5,
    }),
    defineField({
      name: 'review',
      title: 'Review Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientPhoto',
      title: 'Client Photo / Avatar',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type / Celebration',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'eventType',
      media: 'clientPhoto',
    },
  },
});
