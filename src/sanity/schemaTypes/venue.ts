import { defineType, defineField } from 'sanity';

export const venueType = defineType({
  name: 'venue',
  title: 'Venues Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'venueName',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'venueName', maxLength: 96 },
    }),
    defineField({
      name: 'location',
      title: 'Location / City',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'capacity',
      title: 'Guest Capacity',
      type: 'string',
    }),
    defineField({
      name: 'indoorOutdoor',
      title: 'Indoor / Outdoor Facility',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsLink',
      title: 'Google Maps Link',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Venue',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'venueName',
      subtitle: 'location',
      media: 'coverImage',
    },
  },
});
