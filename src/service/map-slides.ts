export interface CatalystSlide {
  description: string;
  key: number;
  title: string;
  cta: {
    label: string;
    href: string;
  };
}

const mapSlides = (slides): CatalystSlide[] => {
  return slides.map((slide, idx) => ({
    description: slide.description,
    key: idx,
    title: slide.title,
    image: {
      src: slide.image.sizes.full.url,
      altText: slide.image.alt,
      blurDataUrl: slide.image.sizes.thumbnail.url,
    },
    cta: {
      label: slide.cta,
      href: slide.link,
    },
  }));
};

export default mapSlides;
