import { defineType, defineField } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'heading',
          validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'about',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'properties',
      title: 'Properties',
      type: 'properties',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'feature',
      title: 'Feature',
      type: 'feature',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'agentSection',
      title: 'Agent Section',
      type: 'agentSection',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonialSection',
      title: 'Testimonial Section',
      type: 'testimonialSection',
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
