import {PersistenceBaseRepository} from '../../../shared/domain/PersistenceBaseRepository';
import {UseCaseBaseRepository} from '../../../shared/domain/UseCaseBaseRepository';
import {WorkSpaceResponse} from '../domain/WorkSpaceResponse';

export class GetWorkSpacesUseCase implements UseCaseBaseRepository<Array<WorkSpaceResponse>> {
  constructor(private repository: PersistenceBaseRepository) {}

  async execute(): Promise<Array<WorkSpaceResponse>> {
    const workSpaces = await this.repository.find<WorkSpaceResponse>({}, {}, {});
    return workSpaces;
  }
}
