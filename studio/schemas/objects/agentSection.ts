import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'agentSection',
  title: 'Agent Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'agents',
      title: 'Agents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required().max(50),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              validation: (Rule) => Rule.max(50),
            }),
            defineField({
              name: 'contactEmail',
              title: 'Contact Email',
              type: 'string',
              validation: (Rule) => Rule.email().max(100),
            }),
            defineField({
              name: 'phone',
              title: 'Phone',
              type: 'string',
              validation: (Rule) => Rule.max(20),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(10),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    }),
  ],
});
