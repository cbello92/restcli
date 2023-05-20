import {GetWorkSpace} from '../domain/GetWorkSpace';
import {WorkSpaceRepository} from '../domain/repository/WorkSpaceRepository';
import {WorkSpaceResponse} from '../domain/response/WorkSpaceResponse';

export class GetWorkSpacesUseCase implements GetWorkSpace {
  constructor(private repository: WorkSpaceRepository) {}

  async execute(): Promise<Array<WorkSpaceResponse>> {
    const workSpaces = await this.repository.list();
    return workSpaces;
  }
}
