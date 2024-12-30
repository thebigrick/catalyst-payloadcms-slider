import { graphql } from '@bigcommerce/catalyst-core/client/graphql';

export const SliderQuery = graphql(`
  query SliderQuery($slug: String!) {
    Sliders(where: { slug: { equals: $slug } }) {
      docs {
        slug
        name
      }
    }
  }
`);
