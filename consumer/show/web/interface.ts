import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ShowSnapshot, SHOW_SNAPSHOT } from '@phading/product_service_interface/consumer/show/show';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

export interface RecommendShowsRequestBody {
  showId?: string,
}

export let RECOMMEND_SHOWS_REQUEST_BODY: MessageDescriptor<RecommendShowsRequestBody> = {
  name: 'RecommendShowsRequestBody',
  fields: [
    {
      name: 'showId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface RecommendShowsResponse {
  show?: ShowSnapshot,
}

export let RECOMMEND_SHOWS_RESPONSE: MessageDescriptor<RecommendShowsResponse> = {
  name: 'RecommendShowsResponse',
  fields: [
    {
      name: 'show',
      messageType: SHOW_SNAPSHOT,
    },
  ]
};

export let RECOMMEND_SHOWS: ServiceDescriptor = {
  name: "RecommendShows",
  path: "/RecommendShows",
  body: {
    messageType: RECOMMEND_SHOWS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: RECOMMEND_SHOWS_RESPONSE,
  },
}
