import {EndpointExecutor} from '../domain/EndpointExecutor';
import {IRequestOptionExtra} from '../domain/RequestOption';
import {ConfigEndpointStrategy} from '../infrastructure/ConfigEndpointStrategy';

export class ExecutorEndpointUseCase implements EndpointExecutor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(url: string, dataAction?: IRequestOptionExtra): Promise<any> {
    console.log('ExecutorEndpointUseCase:::', url, dataAction);
    return new ConfigEndpointStrategy(url, dataAction).run();
  }
}
