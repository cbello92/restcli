import {ObjectId} from 'mongodb';
import {MongooseRepository} from '../../../../shared/infrastructure/persistence/mongoose/MongooseRepository';
import {ConfigEnvironment} from '../../domain/entity/ConfigEnvironment';
import {ConfigEnvironmentRepository} from '../../domain/repository/ConfigEnvironmentRepository';
import {ConfigEnvironmentResponse} from '../../domain/response/ConfigEnvironmentResponse';
import ConfigEnvinronmentSchema from './schema/ConfigEnvinronmentSchema';

export class MongoConfigEnvironmentRepository extends MongooseRepository implements ConfigEnvironmentRepository {
  constructor() {
    super(ConfigEnvinronmentSchema);
  }

  async save(configEnvironment: ConfigEnvironment) {
    await this.persist(configEnvironment);
  }

  async searchAll(): Promise<ConfigEnvironmentResponse[]> {
    return this.find({});
  }

  async update(id: string, configEnvironment: ConfigEnvironment): Promise<void> {
    await this.updateOne({_id: new ObjectId(id)}, {$set: configEnvironment});
  }
}
