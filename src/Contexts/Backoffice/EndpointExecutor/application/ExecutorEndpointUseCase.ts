import {EndpointExecutor} from '../domain/EndpointExecutor';
import {InputAction} from '../domain/OptionsAction';
import {ConfigEndpointStrategy} from '../infrastructure/ConfigEndpointStrategy';

export class ExecutorEndpointUseCase implements EndpointExecutor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(url: string, dataAction?: InputAction): Promise<any> {
    console.log('ExecutorEndpointUseCase:::', url, dataAction);
    return new ConfigEndpointStrategy(url, dataAction).run();
  }
}
