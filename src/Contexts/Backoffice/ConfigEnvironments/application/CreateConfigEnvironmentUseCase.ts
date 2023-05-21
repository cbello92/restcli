import {CreateConfigEnvironment} from '../domain/CreateConfigEnvironment';
import {ConfigEnvironment} from '../domain/entity/ConfigEnvironment';
import {ConfigEnvironmentRepository} from '../domain/repository/ConfigEnvironmentRepository';

export class CreateConfigEnvironmentUseCase implements CreateConfigEnvironment {
  constructor(private repository: ConfigEnvironmentRepository) {}

  async execute(configEnvironment: ConfigEnvironment): Promise<void> {
    await this.repository.save(configEnvironment);
  }
}
