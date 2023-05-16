import {NextFunction, Request, Response} from 'express';

export abstract class ControllerBase {
  abstract run(req: Request, res: Response, next: NextFunction): Promise<void>;
}
