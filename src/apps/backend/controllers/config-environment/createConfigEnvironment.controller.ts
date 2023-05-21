import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {CreateConfigEnvironment} from '../../../../Contexts/Backoffice/ConfigEnvironments/domain/CreateConfigEnvironment';

export class CreateConfifEnvironmentController implements ControllerBase {
  constructor(private useCase: CreateConfigEnvironment) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.useCase.execute(req.body);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
