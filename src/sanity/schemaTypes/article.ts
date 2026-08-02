import { defineType, defineField } from 'sanity';

export const articleType = defineType({
  name: 'article',
  title: 'Journal Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
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
      name: 'featuredImage',
      title: 'Featured Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'author',
      title: 'Author Details',
      type: 'object',
      fields: [
        { name: 'name', title: 'Author Name', type: 'string' },
        { name: 'role', title: 'Author Role', type: 'string' },
        { name: 'avatar', title: 'Author Avatar', type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt Summary',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'tags',
      title: 'Article Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
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
      subtitle: 'category',
      media: 'featuredImage',
    },
  },
});
