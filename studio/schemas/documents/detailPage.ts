import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'detailPage',
  title: 'Detail Page',
  type: 'document',
  fields: [
    defineField({
      name: 'propertyDetail',
      title: 'Property Detail',
      type: 'propertyDetail',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'agentSection',
      title: 'Agent Section',
      type: 'agentSection',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'contactSection',
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
