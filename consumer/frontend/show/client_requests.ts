import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RecommendSeasonsRequestBody, RecommendSeasonsResponse, RECOMMEND_SEASONS } from './interface';

export function recommendSeasons(
  client: WebServiceClientInterface,
  body: RecommendSeasonsRequestBody,
): Promise<RecommendSeasonsResponse> {
  return client.send({
    descriptor: RECOMMEND_SEASONS,
    body,
  });
}
