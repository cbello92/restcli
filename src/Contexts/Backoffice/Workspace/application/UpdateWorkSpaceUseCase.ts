import {WorkSpace} from '../domain/entity/WorkSpace';
import {UpdateWorkSpace} from '../domain/UpdateWorkSpace';
import {WorkSpaceRepository} from '../domain/repository/WorkSpaceRepository';

export class UpdateWorkSpaceUseCase implements UpdateWorkSpace {
  constructor(private repository: WorkSpaceRepository) {}

  async execute(id: string, body: WorkSpace): Promise<void> {
    await this.repository.update(id, body);
  }
}
