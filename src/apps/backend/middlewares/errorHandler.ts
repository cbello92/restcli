import {Request, Response, NextFunction} from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  const logInfo = {
    url: req.path,
    method: req.method,
    error: err,
  };

  console.log('ERROR_HANDLER:::', JSON.stringify(logInfo));
  res.status(500).send(logInfo);
}
