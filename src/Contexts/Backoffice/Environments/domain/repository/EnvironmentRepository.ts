import {Environment} from '../entity/Environment';
import {EnvironmentResponse} from '../response/EnvironmentResponse';

export interface EnvironmentRepository {
  save(environment: Environment): Promise<void>;
  update(id: string, environment: Environment): Promise<void>;
  list(query: Record<string, unknown>): Promise<Array<EnvironmentResponse>>;
}
