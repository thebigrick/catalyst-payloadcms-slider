'use server';

import { Slideshow as SourceSlideshow } from '@bigcommerce/catalyst-core/components/slideshow';
import { Slideshow as ComponentsSlideshow } from '@bigcommerce/catalyst-core/components/ui/slideshow';
import { RefreshRouteOnSave } from '@thebigrick/catalyst-payloadcms';
import { PluginComponentWrapper } from '@thebigrick/catalyst-pluginizr';
import React from 'react';

import getHomeSlider from '../service/get-home-slider';

export const SlideshowWrapper: PluginComponentWrapper<typeof SourceSlideshow> = async () => {
  const slider = await getHomeSlider();

  return (
    <>
      <RefreshRouteOnSave />
      <ComponentsSlideshow slides={slider.slides} />
    </>
  );
};
