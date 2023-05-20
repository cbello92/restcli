import {WorkSpace} from './entity/WorkSpace';

export interface UpdateWorkSpace {
  execute(id: string, body: WorkSpace): Promise<void>;
}
