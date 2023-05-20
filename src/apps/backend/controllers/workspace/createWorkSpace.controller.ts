import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {CreateWorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/CreateWorkSpace';

export class CreateWorkSpaceController implements ControllerBase {
  constructor(private createWorkSpaceUseCase: CreateWorkSpace) {}

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
