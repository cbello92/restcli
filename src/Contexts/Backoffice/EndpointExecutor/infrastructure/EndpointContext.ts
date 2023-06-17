import {EndpointStrategy} from '../domain/EndpointStrategy';
import {IRequestOptionExtra} from '../domain/RequestOption';

export class EndpointContext {
  constructor(private endpointStrategy: EndpointStrategy) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(url: string, dataAction: IRequestOptionExtra): Promise<any> {
    return this.endpointStrategy.execute(url, dataAction);
  }
}
