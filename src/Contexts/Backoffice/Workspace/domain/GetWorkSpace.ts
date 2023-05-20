import {WorkSpaceResponse} from './response/WorkSpaceResponse';

export interface GetWorkSpace {
  execute(): Promise<Array<WorkSpaceResponse>>;
}
