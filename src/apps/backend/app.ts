import {ServerApplication} from './server';

export class App {
  server?: ServerApplication;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async start() {
    const port: number = Number(process.env.PORT_SERVER) || 3000;
    this.server = new ServerApplication(port);
    await this.server.listen();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get httpServer() {
    return this.server?.getHTTPServer();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async stop() {
    await this.server?.stop();
  }
}
