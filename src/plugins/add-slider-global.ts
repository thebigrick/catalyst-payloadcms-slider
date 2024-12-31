import { valuePlugin } from '@thebigrick/catalyst-pluginizr';
import { Config } from 'payload';

import { HomeSlideImage } from '../collections/home-slide-image';
import { HomeSlider } from '../collections/home-slider';

const plugin = valuePlugin<Config>({
  name: 'add-slider-global',
  resourceId: '@thebigrick/catalyst-payloadcms/payload.raw.config',
  wrap: (config) => ({
    ...config,
    globals: [...(config.globals || []), HomeSlider],
    collections: [...(config.collections || []), HomeSlideImage],
    admin: {
      ...config.admin,
      livePreview: {
        ...config.admin?.livePreview,
        globals: [...(config.admin?.livePreview?.globals || []), 'home-slider'],
      },
    },
  }),
});

export default plugin;
