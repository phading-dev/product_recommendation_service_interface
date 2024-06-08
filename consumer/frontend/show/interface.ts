import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { SeasonView, SEASON_VIEW } from './season_view';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

export interface Context {
  publisherId?: string,
  seriesId?: string,
}

export let CONTEXT: MessageDescriptor<Context> = {
  name: 'Context',
  fields: [
    {
      name: 'publisherId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'seriesId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface RecommendSeasonsRequestBody {
  seasonId?: string,
}

export let RECOMMEND_SEASONS_REQUEST_BODY: MessageDescriptor<RecommendSeasonsRequestBody> = {
  name: 'RecommendSeasonsRequestBody',
  fields: [
    {
      name: 'seasonId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface RecommendSeasonsResponse {
  seasons?: Array<SeasonView>,
}

export let RECOMMEND_SEASONS_RESPONSE: MessageDescriptor<RecommendSeasonsResponse> = {
  name: 'RecommendSeasonsResponse',
  fields: [
    {
      name: 'seasons',
      messageType: SEASON_VIEW,
      isArray: true,
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
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: RECOMMEND_SEASONS_RESPONSE,
  },
}
