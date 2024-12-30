import { Slideshow as SourceSlideshow } from '@bigcommerce/catalyst-core/components/slideshow';
import { componentPlugin } from '@thebigrick/catalyst-pluginizr';

import { SlideshowWrapper } from '../components/slideshow-wrapper';

const plugin = componentPlugin<typeof SourceSlideshow>({
  name: 'add-slides-to-slideshow',
  resourceId: '@bigcommerce/catalyst-core/components/slideshow:Slideshow',
  wrap: SlideshowWrapper,
});

export default plugin;
