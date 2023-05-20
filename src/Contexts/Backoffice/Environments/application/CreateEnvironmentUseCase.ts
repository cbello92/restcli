import {Environment} from '../domain/entity/Environment';
import {CreateEnvironment} from '../domain/CreateEnvironment';
import {EnvironmentRepository} from '../domain/repository/EnvironmentRepository';

export class CreateEnvironmentUseCase implements CreateEnvironment {
  constructor(private repository: EnvironmentRepository) {}

  async execute(body: Environment): Promise<void> {
    await this.repository.save(body);
  }
}
