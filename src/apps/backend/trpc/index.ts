import {router} from './trpc-config';
import {verbsRouter} from './verb-http';
import {workspaceRouter} from './workspace';

export const appRouter = router({workspace: workspaceRouter, verbs: verbsRouter});

export type AppRouter = typeof appRouter;
