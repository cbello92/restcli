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
    const {url, ...rest} = input;
    return executorEndpointUseCase.execute(url, {...rest});
  });

export const endpointExecutorRouter = router({endpointExecutor});
