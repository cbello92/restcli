import {EndpointStrategy} from '../domain/EndpointStrategy';
import {InputAction} from '../domain/OptionsAction';

export class EndpointContext {
  constructor(private endpointStrategy: EndpointStrategy) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(url: string, dataAction: InputAction): Promise<any> {
    return this.endpointStrategy.execute(url, dataAction);
  }
}
