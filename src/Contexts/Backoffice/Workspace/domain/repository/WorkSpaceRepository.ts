import {WorkSpaceResponse} from '../response/WorkSpaceResponse';
import {WorkSpace} from './../entity/WorkSpace';

export interface WorkSpaceRepository {
  save(workSpace: WorkSpace): Promise<WorkSpaceResponse>;
  list(): Promise<Array<WorkSpaceResponse>>;
  update(id: string, workSpace: WorkSpace): Promise<void>;
}
