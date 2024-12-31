import type { CollectionConfig } from 'payload';

export const HomeSlideImage: CollectionConfig = {
  slug: 'home-slide-image',
  upload: {
    staticDir: 'payloadcms/home-slide-images',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 921,
        height: 300,
        position: 'centre',
        fit: 'cover',
      },
      {
        name: 'full',
        width: 1536,
        height: 500,
        position: 'centre',
        fit: 'cover',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};
