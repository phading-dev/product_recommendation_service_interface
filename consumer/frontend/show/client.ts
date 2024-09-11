import { RecommendSeasonsRequestBody, RecommendSeasonsResponse, RECOMMEND_SEASONS } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function recommendSeasons(
  client: WebClientInterface,
  body: RecommendSeasonsRequestBody,
  options?: WebClientOptions,
): Promise<RecommendSeasonsResponse> {
  return client.send(
    {
      descriptor: RECOMMEND_SEASONS,
      body,
    },
    options,
  );
}
