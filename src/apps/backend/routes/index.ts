import {Router} from 'express';
import healthRoutes from './health.routes';
import workSpaceRoutes from './workspace.routes';

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  routes(): Router {
    this.router.use('/health', healthRoutes);
    this.router.use('/workspace', workSpaceRoutes);
    return this.router;
  }
}
