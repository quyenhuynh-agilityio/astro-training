import { defineField, defineType } from 'sanity';

export const propertiesType = defineType({
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
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'propertyType',
          title: 'Property Type',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'price',
          title: 'Price Range',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
              ],
            },
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
