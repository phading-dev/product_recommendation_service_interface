import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface RecommendationContext {
  freeForm?: string,
  publisherId?: string,
}

export let RECOMMENDATION_CONTEXT: MessageDescriptor<RecommendationContext> = {
  name: 'RecommendationContext',
  fields: [
    {
      name: 'freeForm',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'publisherId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
