import { defineType, defineField } from 'sanity';

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'officeAddress',
      title: 'Studio Office Address',
      type: 'text',
      initialValue: '60-1-1/1, Jammichettu Center, Netajipark, KAKINADA, Andhra Pradesh 533001',
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number',
      type: 'string',
      initialValue: '+91 63054 57612',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'hello@hanvievents.com',
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed Embed Code / URL',
      type: 'text',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'Mon - Sun: 9:00 AM - 9:00 PM',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'formSettings',
      title: 'Contact Form Settings',
      type: 'object',
      fields: [
        { name: 'formTitle', title: 'Form Title', type: 'string' },
        { name: 'formSubtitle', title: 'Form Subtitle', type: 'string' },
        { name: 'successMessage', title: 'Success Message', type: 'string' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'whatsappNumber',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Contact Info (${title})`,
        subtitle: `WhatsApp: ${subtitle}`,
      };
    },
  },
});
