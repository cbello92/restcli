import {Environment} from './entity/Environment';

export interface CreateEnvironment {
  execute(body: Environment): Promise<void>;
}
