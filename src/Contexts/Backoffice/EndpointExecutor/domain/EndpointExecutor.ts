import {OptionsAction} from './OptionsAction';

export interface EndpointExecutor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(url: string, dataAction: OptionsAction): Promise<any>;
}