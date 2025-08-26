import { defineType, defineField } from 'sanity';

export const agentSectionType = defineType({
  name: 'agent',
  title: 'Agent',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'blockContent',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'slug',
    }),
  ],
});
