import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RECOMMEND_SEASONS, RecommendSeasonsRequestBody, RecommendSeasonsResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class RecommendSeasonsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECOMMEND_SEASONS;
  public abstract handle(
    loggingPrefix: string,
    body: RecommendSeasonsRequestBody,
    auth: ClientSession,
  ): Promise<RecommendSeasonsResponse>;
}
