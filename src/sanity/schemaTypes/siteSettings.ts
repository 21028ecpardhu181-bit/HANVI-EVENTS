import { defineType, defineField } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Hanvi Events',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon Image',
      type: 'image',
    }),
    defineField({
      name: 'navigationMenu',
      title: 'CMS Navigation Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL Link', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'footerContent',
      title: 'Footer Narrative Text',
      type: 'text',
      initialValue: "God's Gift • All Function Events. Managed by Ch. Kala Prasad (Event Manager). Designing bespoke marriages, sangeet, cradle ceremonies, birthdays & corporate galas since 2018.",
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Hanvi Events. All rights reserved. Managed by Ch. Kala Prasad.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Global Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactInformation',
      title: 'Global Contact Snippet',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'address', title: 'Address', type: 'string' },
      ],
    }),
    defineField({
      name: 'seoDefaults',
      title: 'Default SEO Metadata',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Default Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Default Meta Description', type: 'text' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'copyright',
    },
  },
});
