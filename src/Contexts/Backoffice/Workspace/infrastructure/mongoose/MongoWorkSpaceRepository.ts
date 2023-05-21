import {ObjectId} from 'mongodb';
import {MongooseRepository} from '../../../../shared/infrastructure/persistence/mongoose/MongooseRepository';
import {WorkSpace} from '../../domain/entity/WorkSpace';
import {WorkSpaceRepository} from '../../domain/repository/WorkSpaceRepository';
import {WorkSpaceResponse} from '../../domain/response/WorkSpaceResponse';
import WorkSpaceSchema from './schema/WorkSpaceSchema';

export class MongoWorkSpaceRepository extends MongooseRepository implements WorkSpaceRepository {
  constructor() {
    super(WorkSpaceSchema);
  }

  async save(workSpace: WorkSpace): Promise<WorkSpaceResponse> {
    return this.persist<WorkSpace, WorkSpaceResponse>(workSpace);
  }

  async list(): Promise<Array<WorkSpaceResponse>> {
    return this.find<WorkSpaceResponse>({}, {});
  }

  async update(id: string, workSpace: WorkSpace): Promise<void> {
    await this.updateOne<WorkSpace, void>({_id: new ObjectId(id)}, {$set: workSpace});
  }
}
