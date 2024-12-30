import { valuePlugin } from '@thebigrick/catalyst-pluginizr';
import { Config } from 'payload';

import { SlideImage } from '../collections/SlideImage';
import { Slider } from '../collections/Slider';

const plugin = valuePlugin<Config>({
  name: 'add-slider-collection',
  resourceId: '@thebigrick/catalyst-payloadcms/payload.raw.config',
  wrap: (config) => ({
    ...config,
    collections: [...(config.collections || []), Slider, SlideImage],
    admin: {
      ...config.admin,
      livePreview: {
        ...config.admin?.livePreview,
        collections: [...(config.admin?.livePreview?.collections || []), 'slider'],
      },
    },
  }),
});

export default plugin;
