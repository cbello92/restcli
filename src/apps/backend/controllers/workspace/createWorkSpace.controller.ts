import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {CreateWorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/repository/CreateWorkSpace';
import {WorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/entity/WorkSpace';
import {WorkSpaceResponse} from '../../../../Contexts/Backoffice/Workspace/domain/response/WorkSpaceResponse';

export class CreateWorkSpaceController implements ControllerBase {
  constructor(private createWorkSpaceUseCase: CreateWorkSpace<WorkSpace, WorkSpaceResponse>) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const workspaceCreated = await this.createWorkSpaceUseCase.execute(req.body);
      res.status(201).json(workspaceCreated);
    } catch (error) {
      console.log('ERROR_FROM_CONTROLLER:::', error);
      next(error);
    }
  }
}
