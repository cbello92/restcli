import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import {AppRouter} from '../../../backend/trpc';

export const trpc = createTRPCProxyClient<AppRouter>({links: [httpBatchLink({url: '/api'})]});
