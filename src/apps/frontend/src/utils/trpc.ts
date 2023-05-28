import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import {AppRouter} from '../../../backend/trpc';

export const trpc = createTRPCProxyClient<AppRouter>({links: [httpBatchLink({url: 'http://localhost:10000/trpc'})]});
