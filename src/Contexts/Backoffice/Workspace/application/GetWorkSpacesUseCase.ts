import {PersistenceBaseRepository} from '../../../shared/domain/PersistenceBaseRepository';
import {GetWorkSpace} from '../domain/repository/GetWorkSpace';
import {WorkSpaceResponse} from '../domain/response/WorkSpaceResponse';

export class GetWorkSpacesUseCase implements GetWorkSpace<Array<WorkSpaceResponse>> {
  constructor(private repository: PersistenceBaseRepository) {}

  async execute(): Promise<Array<WorkSpaceResponse>> {
    const workSpaces = await this.repository.find<WorkSpaceResponse>({}, {}, {});
    return workSpaces;
  }
}
