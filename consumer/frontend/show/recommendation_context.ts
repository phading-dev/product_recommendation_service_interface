import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface RecommendationContext {
  publisherId?: string,
}

export let RECOMMENDATION_CONTEXT: MessageDescriptor<RecommendationContext> = {
  name: 'RecommendationContext',
  fields: [
    {
      name: 'publisherId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
