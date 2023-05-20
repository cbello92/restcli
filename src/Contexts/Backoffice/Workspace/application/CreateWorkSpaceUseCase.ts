import {WorkSpaceResponse} from '../domain/response/WorkSpaceResponse';
import {WorkSpace} from '../domain/entity/WorkSpace';
import {WorkSpaceRepository} from '../domain/repository/WorkSpaceRepository';
import {CreateWorkSpace} from '../domain/CreateWorkSpace';

export class CreateWorkSpaceUseCase implements CreateWorkSpace {
  constructor(private repository: WorkSpaceRepository) {}

  async execute(body: WorkSpace): Promise<WorkSpaceResponse> {
    const workSpace = await this.repository.save(body);
    return workSpace;
  }
}
