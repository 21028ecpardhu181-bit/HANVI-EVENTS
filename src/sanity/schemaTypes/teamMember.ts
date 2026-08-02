import { defineType, defineField } from 'sanity';

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Team Category',
      type: 'string',
      initialValue: 'Core Team',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
    }),
    defineField({
      name: 'detailedBio',
      title: 'Detailed Bio',
      type: 'text',
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'string',
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
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
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Team Member',
      type: 'boolean',
      initialValue: false,
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
      subtitle: 'role',
      media: 'profileImage',
    },
  },
});
