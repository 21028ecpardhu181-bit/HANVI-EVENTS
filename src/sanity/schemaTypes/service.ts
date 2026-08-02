import { defineType, defineField } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Beauty & Styling', value: 'Beauty & Styling' },
          { title: 'Weddings & Receptions', value: 'Weddings' },
          { title: 'Milestone Parties', value: 'Milestone Parties' },
          { title: 'Corporate Staging', value: 'Corporate Staging' },
          { title: 'Decor & Design', value: 'Decor & Design' },
          { title: 'Catering Feasts', value: 'Catering Feasts' },
          { title: 'Live Entertainment', value: 'Live Entertainment' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Service (Highlight on Homepage)',
      type: 'boolean',
      initialValue: false,
      description: 'Set to TRUE for Bridal Makeup to highlight as premier service.',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order (1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Detailed Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images (Multiple)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'icon',
      title: 'Icon Key (e.g. "sparkles", "heart", "party-popper", "briefcase", "palette", "utensils", "music")',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Key Features & Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (e.g. ₹15,000)',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g. "3 - 5 Hours")',
      type: 'string',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title Tag',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'heroImage',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: `${featured ? '⭐ [FEATURED] ' : ''}${title}`,
        subtitle: subtitle ? `Category: ${subtitle}` : 'No Category',
        media,
      };
    },
  },
});
