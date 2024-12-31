import type { GlobalConfig } from 'payload';

export const HomeSlider: GlobalConfig = {
  slug: 'home-slider',
  admin: {
    livePreview: {
      url: ({ locale }) => {
        const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

        return `${baseUrl}/${locale.code}/`;
      },
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'home-slide-image',
          required: true,
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'cta',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'link',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
};
