import { defineType, defineField } from 'sanity';
import blockContent from '../types/blockContent';

export default defineType({
  name: 'propertyDetail',
  title: 'Property Detail',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'property',
      title: 'Property',
      type: 'reference',
      to: [{ type: 'property' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
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
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: 'detailsLabel',
      title: 'Details Label',
      type: 'string',
      initialValue: 'Details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        defineField({
          name: 'beds',
          title: 'Bedrooms',
          type: 'number',
          validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({
          name: 'baths',
          title: 'Bathrooms',
          type: 'number',
          validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({
          name: 'area',
          title: 'Area (sqm)',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
          name: 'garage',
          title: 'Garage Spaces',
          type: 'number',
          validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({
          name: 'yearBuilt',
          title: 'Year Built',
          type: 'number',
          validation: (Rule) => Rule.required().min(1900).max(2025),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionLabel',
      title: 'Description Label',
      type: 'string',
      initialValue: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuresLabel',
      title: 'Features Label',
      type: 'string',
      initialValue: 'Features',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'Air Conditioning',
              'Fireplace',
              'Modern Kitchen',
              'Swimming Pool',
              'Security System',
              'Smart Home',
              'Garage',
              'Balcony',
              'Garden',
              'Hardwood Floors',
              'Solar Panels',
              'Double Glazing',
            ],
          },
        },
      ],
      validation: (Rule) => Rule.unique().max(12),
    }),
  ],
});
