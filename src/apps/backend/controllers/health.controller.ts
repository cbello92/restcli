import {NextFunction, Request, Response} from 'express';
import {ControllerBase} from '../../../Contexts/shared/infrastructure/controller/ControllerBase';

export class HealthController implements ControllerBase {
  async run(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json({version: '1.0.0'});
    } catch (error) {
      next(error);
    }
  }
}
