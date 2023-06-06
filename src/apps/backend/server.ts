import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import express, {Application} from 'express';
import * as http from 'http';
import {Routes} from './routes';
import {MongoDbConnection} from '../../Contexts/shared/infrastructure/persistence/mongoose/MongoDbConnection';
import {createContext} from './trpc/trpc-config';
import {appRouter} from './trpc';

export class ServerApplication {
  public server: Application;
  private httpServer?: http.Server;
  private port: number;
  public appRoutes: Routes = new Routes();
  public database: MongoDbConnection = new MongoDbConnection();

  constructor(port: number) {
    this.port = port;
    this.server = express();
    this.config();
  }

  private config(): void {
    this.server.use(cors());
    this.server.use('/trpc', trpcExpress.createExpressMiddleware({router: appRouter, createContext}));

    if (process.env.NODE_ENV !== 'test') {
      this.database.run();
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getHTTPServer() {
    return this.httpServer;
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.server.listen(this.port, () => {
        console.info('Server listening!');
        console.info(`App listening on port ${this.port}`);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      // eslint-disable-next-line no-promise-executor-return
      return resolve();
    });
  }
}
