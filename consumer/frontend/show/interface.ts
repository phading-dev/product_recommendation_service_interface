import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { PublisherDetail, PUBLISHER_DETAIL } from './publisher_detail';
import { SeasonOverview, SEASON_OVERVIEW } from './season_overview';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface RecommendSeasonsRequestBody {
  query?: string,
  cursor?: string,
}

export let RECOMMEND_SEASONS_REQUEST_BODY: MessageDescriptor<RecommendSeasonsRequestBody> = {
  name: 'RecommendSeasonsRequestBody',
  fields: [
    {
      name: 'query',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'cursor',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface FullContext {
  publisher?: PublisherDetail,
}

export let FULL_CONTEXT: MessageDescriptor<FullContext> = {
  name: 'FullContext',
  fields: [
    {
      name: 'publisher',
      messageType: PUBLISHER_DETAIL,
    },
  ]
};

export interface RecommendSeasonsResponse {
  context?: FullContext,
  seasons?: Array<SeasonOverview>,
  cursor?: string,
}

export let RECOMMEND_SEASONS_RESPONSE: MessageDescriptor<RecommendSeasonsResponse> = {
  name: 'RecommendSeasonsResponse',
  fields: [
    {
      name: 'context',
      messageType: FULL_CONTEXT,
    },
    {
      name: 'seasons',
      messageType: SEASON_OVERVIEW,
      isArray: true,
    },
    {
      name: 'cursor',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let RECOMMEND_SEASONS: ServiceDescriptor = {
  name: "RecommendSeasons",
  path: "/RecommendSeasons",
  body: {
    messageType: RECOMMEND_SEASONS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: RECOMMEND_SEASONS_RESPONSE,
  },
}
