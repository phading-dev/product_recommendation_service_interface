import { RecommendSeasonsRequestBody, RECOMMEND_SEASONS, RecommendSeasonsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class RecommendSeasonsHandlerInterface implements WebHandlerInterface {
  public descriptor = RECOMMEND_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: RecommendSeasonsRequestBody,
    auth: ClientSession,
  ): Promise<RecommendSeasonsResponse>;
}
