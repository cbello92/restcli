import {ConfigEnvironment} from '../entity/ConfigEnvironment';
import {ConfigEnvironmentResponse} from '../response/ConfigEnvironmentResponse';

export interface ConfigEnvironmentRepository {
  save(configEnvironment: ConfigEnvironment): Promise<void>;
  searchAll(): Promise<ConfigEnvironmentResponse[]>;
  update(id: string, configEnvironment: ConfigEnvironment): Promise<void>;
}
