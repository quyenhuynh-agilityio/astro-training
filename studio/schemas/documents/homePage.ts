import { defineField, defineType } from 'sanity';

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
          type: 'slug',
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
      name: 'agent',
      title: 'Agent',
      type: 'agent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'testimonial',
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
