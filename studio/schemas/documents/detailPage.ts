import { defineType, defineField } from 'sanity';

export const propertyDetailType = defineType({
  name: 'detailPage',
  title: 'Detail Page',
  type: 'document',
  fields: [
    defineField({
      name: 'property',
      title: 'Property',
      type: 'property',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
