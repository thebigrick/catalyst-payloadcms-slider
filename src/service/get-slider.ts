'use server';

// eslint-disable-next-line import/no-unresolved
import config from '@payload-config';
import { getPayload } from 'payload';

import mapSlides, { CatalystSlide } from './map-slides';

export interface CatalystSlider {
  slides: CatalystSlide[];
}

/**
 * Get a slider by its slug
 * @param {string} slug
 * @returns {Promise<Slider>}
 */
const getSlider = async (slug: string): Promise<CatalystSlider> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload = await getPayload({ config });

  const res = await payload.find({
    collection: 'slider',
    depth: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (res.docs.length === 0) {
    return {
      slides: [],
    };
  }

  const slider = res.docs[0];

  return {
    slides: mapSlides(slider.slides),
  };
};

export default getSlider;
