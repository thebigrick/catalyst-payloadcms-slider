import type { CollectionConfig } from 'payload';

export const Slider: CollectionConfig = {
  slug: 'slider',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'slide-image',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'cta',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'autoplay',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'interval',
      type: 'number',
      defaultValue: 5000,
      admin: {
        condition: (data) => Boolean(data.autoplay),
      },
    },
  ],
};
