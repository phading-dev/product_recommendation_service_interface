import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface RecommendationContext {
  query?: string,
}

export let RECOMMENDATION_CONTEXT: MessageDescriptor<RecommendationContext> = {
  name: 'RecommendationContext',
  fields: [
    {
      name: 'query',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
