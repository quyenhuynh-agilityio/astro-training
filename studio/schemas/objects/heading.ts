import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'blockContent',
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
      },
      initialValue: 'center',
    }),
  ],
});
