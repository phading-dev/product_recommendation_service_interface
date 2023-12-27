import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RecommendShowsRequestBody, RecommendShowsResponse, RECOMMEND_SHOWS } from './interface';

export function recommendShows(
  client: WebServiceClientInterface,
  body: RecommendShowsRequestBody,
): Promise<RecommendShowsResponse> {
  return client.send({
    descriptor: RECOMMEND_SHOWS,
    body,
  });
}
