import {PersistenceBaseRepository} from '../../../shared/domain/PersistenceBaseRepository';
import {GetWorkSpace} from '../domain/GetWorkSpace';
import {WorkSpaceResponse} from '../domain/WorkSpaceResponse';

export class GetWorkSpacesUseCase implements GetWorkSpace<Array<WorkSpaceResponse>> {
  constructor(private repository: PersistenceBaseRepository) {}

  async execute(): Promise<Array<WorkSpaceResponse>> {
    const workSpaces = await this.repository.find<WorkSpaceResponse>({}, {}, {});
    return workSpaces;
  }
}
