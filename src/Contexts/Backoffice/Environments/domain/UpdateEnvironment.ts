import {Environment} from './entity/Environment';

export interface UpdateEnvironment {
  execute(id: string, body: Environment): Promise<void>;
}
