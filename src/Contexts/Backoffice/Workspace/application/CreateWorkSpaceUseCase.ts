import {PersistenceBaseRepository} from '../../../shared/domain/PersistenceBaseRepository';
import {CreateWorkSpace} from '../domain/CreateWorkSpace';
import {WorkSpaceResponse} from '../domain/WorkSpaceResponse';
import {WorkSpace} from '../domain/entity/WorkSpace';

export class CreateWorkSpaceUseCase implements CreateWorkSpace<WorkSpace, WorkSpaceResponse> {
  constructor(private repository: PersistenceBaseRepository) {}

  async execute(body: WorkSpace): Promise<WorkSpaceResponse> {
    const workSpace = await this.repository.persist<WorkSpace, WorkSpaceResponse>(body);
    return workSpace;
  }
}
