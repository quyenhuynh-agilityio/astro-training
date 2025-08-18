import { defineType, defineField } from 'sanity';
import blockContent from '../types/blockContent';

export default defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email().required(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule) => Rule.max(20),
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
          validation: (Rule) => Rule.max(200),
        }),
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Field Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'type',
              title: 'Field Type',
              type: 'string',
              options: {
                list: ['text', 'email', 'textarea', 'tel'],
              },
              initialValue: 'text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(3).max(6),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
