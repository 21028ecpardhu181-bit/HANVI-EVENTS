import { defineType, defineField } from 'sanity';

export const sacredJourneyType = defineType({
  name: 'sacredJourney',
  title: 'Sacred Journey Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'journeyTitle',
      title: 'Journey Title',
      type: 'string',
      description: 'Name of the ceremony step (e.g. "Engagement Ceremony")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'journeyTitle', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'weddingTradition',
      title: 'Wedding Tradition',
      type: 'reference',
      to: [{ type: 'weddingTradition' }],
      description: 'Which wedding tradition does this step belong to?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      description: 'Numeric position of this step (e.g. 1, 2, 3 …)',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the tab order on the page (lower = first)',
    }),
    defineField({
      name: 'journeyLabel',
      title: 'Journey Label',
      type: 'string',
      description: 'Short label shown in the step badge (e.g. "Step 01 of 06")',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'When this step happens (e.g. "3 to 6 Months Before Wedding")',
    }),
    defineField({
      name: 'ceremonyName',
      title: 'Ceremony Name',
      type: 'string',
      description: 'Local / traditional name of the ceremony (e.g. "Nischithardham")',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'One-paragraph summary displayed on the tab detail view',
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
      rows: 6,
      description: 'Full narrative for the ceremony step (optional extended copy)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image displayed when this tab is active',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Spatial Decor Highlights — shown as bullet points (e.g. "Brass Uruli Floral Setups")',
    }),
    defineField({
      name: 'decorIdeas',
      title: 'Decor Ideas',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Additional decor suggestions for this step',
    }),
  ],
  preview: {
    select: {
      title: 'journeyTitle',
      subtitle: 'timeline',
      media: 'heroImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Sacred Journey Step',
        subtitle: subtitle || '',
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order (Ascending)',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Step Number (Ascending)',
      name: 'stepNumberAsc',
      by: [{ field: 'stepNumber', direction: 'asc' }],
    },
  ],
});
