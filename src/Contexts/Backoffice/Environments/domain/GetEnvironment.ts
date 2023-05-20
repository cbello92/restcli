import {EnvironmentResponse} from './response/EnvironmentResponse';

export interface GetEnvironment {
  execute(query: Record<string, unknown>): Promise<Array<EnvironmentResponse>>;
}
