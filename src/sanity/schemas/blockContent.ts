// ./src/sanity/schemaTypes/blockContent.ts
import { defineType, defineArrayMember } from 'sanity';

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    // Basic portable text blocks
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open in new tab',
              },
            ],
          },
        ],
      },
    }),

    // Image with alt text
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: { isHighlighted: true },
        },
      ],
    }),

    // Video embed (e.g., YouTube or Vimeo)
    defineArrayMember({
      name: 'videoEmbed',
      type: 'object',
      title: 'Video Embed',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'Video URL',
        },
      ],
    }),
    defineArrayMember({
      name: 'table',
      type: 'object',
      title: 'Table',
      fields: [
        {
          name: 'hasHeader',
          type: 'boolean',
          title: 'First Row is Header',
          initialValue: true,
        },
        {
          name: 'rows',
          type: 'array',
          title: 'Table Rows',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  title: 'Cells',
                  of: [{ type: 'string' }],
                },
              ],
              preview: {
                select: {
                  cells: 'cells',
                },
                prepare({ cells }) {
                  return {
                    title: cells.join(' | '),
                  };
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          hasHeader: 'hasHeader',
          rows: 'rows',
        },
        prepare({ hasHeader, rows }) {
          return {
            title: `Table (${rows?.length || 0} row${rows?.length === 1 ? '' : 's'})`,
            subtitle: hasHeader ? 'Header row included' : 'No header row',
          };
        },
      },
    }),

    // Callout or Alert box
    defineArrayMember({
      name: 'callout',
      type: 'object',
      title: 'Callout',
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Type',
          options: {
            list: ['info', 'warning', 'error', 'success'],
            layout: 'radio',
          },
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'body',
          type: 'text',
          title: 'Body',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'type',
        },
      },
    }),
  ],
});
