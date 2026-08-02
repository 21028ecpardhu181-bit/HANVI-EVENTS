import { defineType, defineField } from 'sanity';

export const packageItemType = defineType({
  name: 'packageItem',
  title: 'Packages Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'packageName',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'packageName', maxLength: 96 },
    }),
    defineField({
      name: 'packageSubtitle',
      title: 'Package Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price Tag (e.g. ₹1,50,000)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'includedServices',
      title: 'Included Services',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'packageImage',
      title: 'Package Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Detailed Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Book Package →',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'featuredPackage',
      title: 'Featured / Popular Package Badge',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
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
      title: 'packageName',
      subtitle: 'price',
      media: 'packageImage',
    },
  },
});
