import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {CreateWorkSpaceUseCase} from '../../../Contexts/Backoffice/Workspace/application/CreateWorkSpaceUseCase';

export class CreateWorkSpaceController implements ControllerBase {
  constructor(private createWorkSpaceUseCase: CreateWorkSpaceUseCase) {}

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
