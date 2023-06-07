import {publicProcedure, router} from './trpc-config';
import {InputAction, OptionsAction} from '../../../Contexts/Backoffice/EndpointExecutor/domain/OptionsAction';
import {ExecutorEndpointUseCase} from '../../../Contexts/Backoffice/EndpointExecutor/application/ExecutorEndpointUseCase';

export interface InputActionRequest {
  url: string;
  optionsAction: OptionsAction;
}

const executorEndpointUseCase = new ExecutorEndpointUseCase();

const endpointExecutor = publicProcedure
  .input((input: InputAction) => input)
  .mutation(async ({input}) => {
    console.log('INPUT', input);
    const {headers, params, method} = input;
    return executorEndpointUseCase.execute(input.url, {method, headers, params});
  });

export const endpointExecutorRouter = router({endpointExecutor});
