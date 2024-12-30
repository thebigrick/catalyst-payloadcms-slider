import { Slideshow as SourceSlideshow } from '@bigcommerce/catalyst-core/components/slideshow';
import { Slideshow as ComponentsSlideshow } from '@bigcommerce/catalyst-core/components/ui/slideshow';
import { RefreshRouteOnSave } from '@thebigrick/catalyst-payloadcms';
import { PluginComponentWrapper } from '@thebigrick/catalyst-pluginizr';
import React from 'react';

import getSlider from '../service/get-slider';

export const SlideshowWrapper: PluginComponentWrapper<typeof SourceSlideshow> = async () => {
  const slider = await getSlider('home');

  return (
    <>
      <RefreshRouteOnSave />
      <ComponentsSlideshow slides={slider.slides} />
    </>
  );
};
