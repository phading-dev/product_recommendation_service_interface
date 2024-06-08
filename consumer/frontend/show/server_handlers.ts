import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RECOMMEND_SEASONS, RecommendSeasonsRequestBody, RecommendSeasonsResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class RecommendSeasonsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECOMMEND_SEASONS;
  public abstract handle(
    requestId: string,
    body: RecommendSeasonsRequestBody,
    auth: WebClientSession,
  ): Promise<RecommendSeasonsResponse>;
}
