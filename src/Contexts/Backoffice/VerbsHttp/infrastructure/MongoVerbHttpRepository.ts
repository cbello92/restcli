import {MongooseRepository} from '../../../shared/infrastructure/persistence/mongoose/MongooseRepository';
import {VerbHttpRepository} from '../domain/repository/VerbHttpRepository';
import {VerbHttpResponse} from '../domain/response/VerbHttpResponse';
import VerbHttpSchema from './mongoose/schema/VerbHttpSchema';

export class MongoVerbHttpRepository extends MongooseRepository implements VerbHttpRepository {
  constructor() {
    super(VerbHttpSchema);
  }

  async list(): Promise<VerbHttpResponse[]> {
    return this.find<VerbHttpResponse>({}, {});
  }
}
