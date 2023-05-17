import {ObjectId} from 'mongodb';
import {PersistenceBaseRepository} from '../../../shared/domain/PersistenceBaseRepository';
import {WorkSpace} from '../domain/entity/WorkSpace';
import {UpdateWorkSpace} from '../domain/repository/UpdateWorkSpace';

export class UpdateWorkSpaceUseCase implements UpdateWorkSpace<WorkSpace, void> {
  constructor(private repository: PersistenceBaseRepository) {}

  async execute(id: string, body: WorkSpace): Promise<void> {
    await this.repository.updateOne<WorkSpace, void>({_id: new ObjectId(id)}, {$set: body});
  }
}
