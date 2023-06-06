import {inferAsyncReturnType, initTRPC} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

// created for each request
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create({
  errorFormatter(opts) {
    const {shape, error} = opts;
    console.log(error.cause);
    return {
      ...shape,
      data: {cause: error.cause},
    };
  },
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
