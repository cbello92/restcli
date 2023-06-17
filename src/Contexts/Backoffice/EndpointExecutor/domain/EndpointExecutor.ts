import {IRequestOption} from './RequestOption';

export interface EndpointExecutor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(url: string, body?: any, dataAction?: IRequestOption): Promise<any>;
}
