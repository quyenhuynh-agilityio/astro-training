import { defineType, defineField } from 'sanity';

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'pricePerSqft',
      title: 'Price per Sqft',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
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
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['For Sale', 'Sold', 'Under Offer'],
      },
      initialValue: 'For Sale',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
