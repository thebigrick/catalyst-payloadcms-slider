// eslint-disable-next-line import/no-unresolved
import config from '@payload-config';
import { getLocale } from 'next-intl/server';
import { getPayload } from 'payload';

import mapSlides, { CatalystHomeSlide } from './map-slides';

export interface CatalystHomeSlider {
  slides: CatalystHomeSlide[];
}

/**
 * Get a slider by its slug
 * @returns {Promise<CatalystHomeSlider>}
 */
const getHomeSlider = async (): Promise<CatalystHomeSlider> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await getPayload({ config });
  const locale = await getLocale();

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const slider = (await payload.findGlobal({
    // @ts-expect-error - we are not aware of the type of the slug here
    slug: 'home-slider',
    depth: 1,
    // @ts-expect-error - we don't know the whole locale list
    locale,
  })) as CatalystHomeSlider;

  if (slider.slides.length === 0) {
    return {
      slides: [],
    };
  }

  return {
    slides: mapSlides(slider.slides),
  };
};

export default getHomeSlider;
