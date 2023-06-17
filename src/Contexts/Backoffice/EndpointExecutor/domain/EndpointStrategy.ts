import {IRequestOption} from './RequestOption';

export interface EndpointStrategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(url: string, dataAction?: IRequestOption): Promise<any>;
}
