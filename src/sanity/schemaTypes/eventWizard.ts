import { defineType, defineField } from 'sanity';

export const eventWizardType = defineType({
  name: 'eventWizard',
  title: 'Event Wizard Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Wizard Header Title',
      type: 'string',
      initialValue: 'Interactive Event Cost & Package Calculator',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Wizard Description',
      type: 'text',
      initialValue: 'Select your event type, guest count, and desired services to get an instant customized quotation and WhatsApp consultation.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number',
      type: 'string',
      initialValue: '+91 63054 57612',
    }),
    defineField({
      name: 'steps',
      title: 'Wizard Step Names',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'questions',
      title: 'Questions Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'questionTitle', title: 'Question Title', type: 'string' },
            { name: 'options', title: 'Options', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'recommendations',
      title: 'Recommendation Packages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaText',
      title: 'Submit CTA Text',
      type: 'string',
      initialValue: 'Get Instant WhatsApp Quote →',
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
      subtitle: 'whatsappNumber',
      media: 'coverImage',
    },
  },
});
