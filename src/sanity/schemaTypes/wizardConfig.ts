import { defineType, defineField } from 'sanity';

export const wizardConfigType = defineType({
  name: 'wizardConfig',
  title: 'Event Wizard Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number',
      type: 'string',
      initialValue: '+91 63054 57612',
    }),
    defineField({
      name: 'celebrationTypes',
      title: 'Celebration Types Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'guestCountOptions',
      title: 'Guest Count Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'budgetOptions',
      title: 'Budget Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'whatsappNumber',
    },
    prepare({ title }) {
      return {
        title: `Event Wizard (WhatsApp: ${title || '+91 63054 57612'})`,
      };
    },
  },
});
