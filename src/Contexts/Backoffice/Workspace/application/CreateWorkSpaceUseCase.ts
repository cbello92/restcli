import {PersistenceBaseRepository} from '../../../shared/domain/PersistenceBaseRepository';
import {CreateWorkSpace} from '../domain/repository/CreateWorkSpace';
import {WorkSpaceResponse} from '../domain/response/WorkSpaceResponse';
import {WorkSpace} from '../domain/entity/WorkSpace';

export class CreateWorkSpaceUseCase implements CreateWorkSpace<WorkSpace, WorkSpaceResponse> {
  constructor(private repository: PersistenceBaseRepository) {}

  async execute(body: WorkSpace): Promise<WorkSpaceResponse> {
    const workSpace = await this.repository.persist<WorkSpace, WorkSpaceResponse>(body);
    return workSpace;
  }
}
