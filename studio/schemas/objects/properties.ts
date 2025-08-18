import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'properties',
  title: 'Properties',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Properties',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'property' }] }],
      validation: (Rule) => Rule.min(1).max(12),
    }),
    defineField({
      name: 'filters',
      title: 'Filters',
      type: 'object',
      fields: [
        defineField({
          name: 'lookingFor',
          title: 'Looking For',
          type: 'string',
          options: {
            list: ['Buy', 'Rent', 'Sell'],
          },
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'propertyType',
          title: 'Property Type',
          type: 'string',
          options: {
            list: ['House', 'Apartment', 'Villa', 'Townhouse'],
          },
        }),
        defineField({
          name: 'price',
          title: 'Price Range',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              title: 'Minimum Price',
              type: 'number',
            }),
            defineField({
              name: 'max',
              title: 'Maximum Price',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'blockContent',
    }),
  ],
});
