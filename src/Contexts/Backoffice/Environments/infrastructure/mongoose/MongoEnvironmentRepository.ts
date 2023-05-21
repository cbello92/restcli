import {ObjectId} from 'mongodb';
import {MongooseRepository} from '../../../../shared/infrastructure/persistence/mongoose/MongooseRepository';
import {Environment} from '../../domain/entity/Environment';
import {EnvironmentRepository} from '../../domain/repository/EnvironmentRepository';
import {EnvironmentResponse} from '../../domain/response/EnvironmentResponse';
import EnvironmentSchema from './schema/EnvironmentSchema';

export class MongoEnvironmentRepository extends MongooseRepository implements EnvironmentRepository {
  constructor() {
    super(EnvironmentSchema);
  }

  async update(id: string, environment: Environment): Promise<void> {
    await this.updateOne({_id: new ObjectId(id)}, {$set: environment});
  }

  async list(query: Record<string, unknown>): Promise<EnvironmentResponse[]> {
    return this.find<EnvironmentResponse>(query);
  }

  async save(environment: Environment): Promise<void> {
    await this.persist(environment);
  }
}
