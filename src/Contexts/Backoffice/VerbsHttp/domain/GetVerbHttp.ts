import {VerbHttpResponse} from './response/VerbHttpResponse';

export interface GetVerbHttp {
  execute(): Promise<Array<VerbHttpResponse>>;
}
