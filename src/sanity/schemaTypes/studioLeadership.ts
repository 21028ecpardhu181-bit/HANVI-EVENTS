import { defineType, defineField } from 'sanity';

export const studioLeadershipType = defineType({
  name: 'studioLeadership',
  title: 'Studio Leadership Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position / Title',
      type: 'string',
      initialValue: 'Founder & Event Director',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text',
    }),
    defineField({
      name: 'experience',
      title: 'Experience (e.g. 8+ Years)',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Leadership Member',
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
      title: 'name',
      subtitle: 'position',
      media: 'profileImage',
    },
  },
});
