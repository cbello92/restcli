import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {GetWorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/repository/GetWorkSpace';
import {WorkSpaceResponse} from '../../../../Contexts/Backoffice/Workspace/domain/response/WorkSpaceResponse';

export class GetWorkSpaceController implements ControllerBase {
  constructor(private getWorkSpaceUsecase: GetWorkSpace<Array<WorkSpaceResponse>>) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const workspaces = await this.getWorkSpaceUsecase.execute();
      res.status(200).json(workspaces);
    } catch (error) {
      next(error);
    }
  }
}
