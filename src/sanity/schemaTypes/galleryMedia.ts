import { defineType, defineField } from 'sanity';

export const galleryMediaType = defineType({
  name: 'galleryMedia',
  title: 'Gallery & Video Moments',
  type: 'document',
  fields: [
    defineField({
      name: 'albumTitle',
      title: 'Title / Headline',
      type: 'string',
      description: 'e.g. Swathi & Rajesh Grand Mandap Gala, Jasmine Strand Reveal, Beachside Reception...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Media Format',
      type: 'string',
      options: {
        list: [
          { title: '🎬 Instagram Reel / YouTube Shorts (Vertical 9:16)', value: 'reel' },
          { title: '🎥 YouTube Cinema Film (Horizontal 16:9)', value: 'film' },
          { title: '📸 Photo Showcase Album', value: 'image' },
        ],
        layout: 'radio',
      },
      initialValue: 'reel',
      description: 'Select the format to control card dimensions and video player behavior',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Mandap',
          'Florals',
          'Lighting',
          'Stage',
          'Entrance',
          'Catering',
          'Mehendi',
          'Photography',
          'Other',
        ],
      },
      initialValue: 'Mandap',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Link (YouTube, Shorts, Reel, Vimeo, MP4)',
      type: 'url',
      description: 'Paste direct link: e.g. https://www.youtube.com/watch?v=... or https://youtube.com/shorts/... or Instagram Reel link',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover / Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Poster image displayed before video playback or as photo card',
    }),
    defineField({
      name: 'eventName',
      title: 'Event Location / Subtitle',
      type: 'string',
      description: 'e.g. Kakinada Convention Center • Telugu Marriage',
    }),
    defineField({
      name: 'images',
      title: 'Additional Photo Gallery Array',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Optional additional photos for this album',
    }),
    defineField({
      name: 'featured',
      title: 'Featured / Highlight Item',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / Published on Website',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle OFF to instantly hide this reel/video from the website without deleting',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / Priority',
      type: 'number',
      initialValue: 1,
      description: 'Lower numbers appear first in the horizontal carousel and gallery stream (1, 2, 3...)',
    }),
    defineField({
      name: 'views',
      title: 'Views / Duration Badge (Optional)',
      type: 'string',
      description: 'e.g. 45K Views, 3:40 Film, 4K Cinema...',
    }),
  ],
  preview: {
    select: {
      title: 'albumTitle',
      subtitle: 'category',
      media: 'coverImage',
      type: 'type',
    },
    prepare({ title, subtitle, media, type }) {
      const typeIcon = type === 'reel' ? '🎬 Reel' : type === 'film' ? '🎥 Film' : '📸 Image';
      return {
        title: title || 'Untitled Media',
        subtitle: `${typeIcon} • ${subtitle || 'General'}`,
        media,
      };
    },
  },
});
