import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {GetWorkSpacesUseCase} from '../../../Contexts/Backoffice/Workspace/application/GetWorkSpacesUseCase';

export class GetWorkSpaceController implements ControllerBase {
  constructor(private getWorkSpaceUsecase: GetWorkSpacesUseCase) {}
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const workspaces = await this.getWorkSpaceUsecase.execute();
      res.status(200).json(workspaces);
    } catch (error) {
      next(error);
    }
  }
}
