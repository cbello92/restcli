import {UpdateEnvironment} from '../domain/UpdateEnvironment';
import {Environment} from '../domain/entity/Environment';
import {EnvironmentRepository} from '../domain/repository/EnvironmentRepository';

export class UpdateEnvironmentUseCase implements UpdateEnvironment {
  constructor(private repository: EnvironmentRepository) {}

  async execute(id: string, body: Environment): Promise<void> {
    await this.repository.update(id, body);
  }
}
