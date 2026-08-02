import { defineType, defineField } from 'sanity';

export const homeType = defineType({
  name: 'home',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Main Title',
      type: 'string',
      initialValue: 'Architects of Sacred & Unforgettable Celebrations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle / Eyebrow',
      type: 'string',
      initialValue: 'Kakinada Premier Luxury Event Planners • Est. 2018',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      initialValue: 'Designing bespoke Vedic marriage mandaps, sangeet galas, birthday celebrations & corporate events under the personal supervision of Ch. Kala Prasad.',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'ctaPrimaryText',
      title: 'Primary CTA Button Text',
      type: 'string',
      initialValue: 'Plan Your Event →',
    }),
    defineField({
      name: 'ctaPrimaryLink',
      title: 'Primary CTA Button Link',
      type: 'string',
      initialValue: '/wizard',
    }),
    defineField({
      name: 'ctaSecondaryText',
      title: 'Secondary CTA Button Text',
      type: 'string',
      initialValue: 'Explore Services',
    }),
    defineField({
      name: 'ctaSecondaryLink',
      title: 'Secondary CTA Button Link',
      type: 'string',
      initialValue: '/services',
    }),
    defineField({
      name: 'statistics',
      title: 'Key Statistics Bar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 500+)', type: 'string' },
            { name: 'label', title: 'Label (e.g. Weddings Executed)', type: 'string' },
          ],
        },
      ],
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
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
      media: 'heroBackgroundImage',
    },
  },
});
