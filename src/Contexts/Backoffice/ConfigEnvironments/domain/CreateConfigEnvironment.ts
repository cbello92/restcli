import {ConfigEnvironment} from './entity/ConfigEnvironment';

export interface CreateConfigEnvironment {
  execute(configEnvironment: ConfigEnvironment): Promise<void>;
}
