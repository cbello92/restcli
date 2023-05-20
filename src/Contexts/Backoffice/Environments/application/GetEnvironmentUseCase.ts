import {GetEnvironment} from '../domain/GetEnvironment';
import {EnvironmentRepository} from '../domain/repository/EnvironmentRepository';
import {EnvironmentResponse} from '../domain/response/EnvironmentResponse';

export class GetEnvironmentUseCase implements GetEnvironment {
  constructor(private repository: EnvironmentRepository) {}

  async execute(query: Record<string, unknown>): Promise<Array<EnvironmentResponse>> {
    return this.repository.list(query);
  }
}
