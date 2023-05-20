import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {CreateEnvironment} from '../../../../Contexts/Backoffice/Environments/domain/CreateEnvironment';
import {Environment} from '../../../../Contexts/Backoffice/Environments/domain/entity/Environment';

export class CreateEnvironmentController implements ControllerBase {
  constructor(private createEnvironmentUseCase: CreateEnvironment) {}
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {name, description, color, workspaceId} = req.body;
      await this.createEnvironmentUseCase.execute(new Environment(name, description, color, workspaceId));
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
