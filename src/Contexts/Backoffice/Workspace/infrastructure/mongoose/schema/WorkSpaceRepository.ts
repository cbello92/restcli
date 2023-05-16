import {MongooseRepository} from '../../../../../shared/infrastructure/persistence/mongoose/MongooseRepository';
import WorkSpaceSchema from './WorkSpaceSchema';

export class WorkSpaceRepository extends MongooseRepository {
  constructor() {
    super(WorkSpaceSchema);
  }
}
