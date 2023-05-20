import {WorkSpace} from './entity/WorkSpace';
import {WorkSpaceResponse} from './response/WorkSpaceResponse';

export interface CreateWorkSpace {
  execute(body: WorkSpace): Promise<WorkSpaceResponse>;
}
