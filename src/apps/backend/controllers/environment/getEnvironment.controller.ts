import {Request, Response, NextFunction} from 'express';
import {ControllerBase} from '../../../../Contexts/shared/infrastructure/controller/ControllerBase';
import {GetEnvironment} from '../../../../Contexts/Backoffice/Environments/domain/GetEnvironment';

export class GetEnvironmentController implements ControllerBase {
  constructor(private useCase: GetEnvironment) {}

  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {query} = req;
      const response = await this.useCase.execute(query);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
