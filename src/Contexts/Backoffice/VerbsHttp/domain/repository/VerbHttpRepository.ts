import {VerbHttpResponse} from '../response/VerbHttpResponse';

export interface VerbHttpRepository {
  list(): Promise<VerbHttpResponse[]>;
}
