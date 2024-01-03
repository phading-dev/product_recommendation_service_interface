import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RECOMMEND_SHOWS, RecommendShowsRequestBody, RecommendShowsResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class RecommendShowsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RECOMMEND_SHOWS;
  public abstract handle(
    requestId: string,
    body: RecommendShowsRequestBody,
    auth: WebClientSession,
  ): Promise<RecommendShowsResponse>;
}
