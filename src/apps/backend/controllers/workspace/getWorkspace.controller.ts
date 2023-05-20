import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {GetWorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/GetWorkSpace';

export class GetWorkSpaceController implements ControllerBase {
  constructor(private getWorkSpaceUsecase: GetWorkSpace) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const workspaces = await this.getWorkSpaceUsecase.execute();
      res.status(200).json(workspaces);
    } catch (error) {
      next(error);
    }
  }
}
