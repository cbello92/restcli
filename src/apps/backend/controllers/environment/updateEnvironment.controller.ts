import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {UpdateEnvironment} from '../../../../Contexts/Backoffice/Environments/domain/UpdateEnvironment';

export class UpdateEnvironmentController implements ControllerBase {
  constructor(private useCase: UpdateEnvironment) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.useCase.execute(req.params.id, req.body);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
