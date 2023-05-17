import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {UpdateWorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/repository/UpdateWorkSpace';
import {WorkSpace} from '../../../../Contexts/Backoffice/Workspace/domain/entity/WorkSpace';

export class UpdateWorkSpaceController implements ControllerBase {
  constructor(private updateWorkSpaceUseCase: UpdateWorkSpace<WorkSpace, void>) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {body, params} = req;
      const {id} = params;
      await this.updateWorkSpaceUseCase.execute(id, body);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
