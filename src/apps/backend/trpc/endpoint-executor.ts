import {publicProcedure, router} from './trpc-config';
import {IRequestOptionExtra, IRequestOption} from '../../../Contexts/Backoffice/EndpointExecutor/domain/RequestOption';
import {ExecutorEndpointUseCase} from '../../../Contexts/Backoffice/EndpointExecutor/application/ExecutorEndpointUseCase';

export interface InputActionRequest {
  url: string;
  optionsAction: IRequestOption;
}

const executorEndpointUseCase = new ExecutorEndpointUseCase();

const endpointExecutor = publicProcedure
  .input((input: IRequestOptionExtra) => input)
  .mutation(async ({input}) => {
    console.log('INPUT', input);
    const {url, ...rest} = input;
    return executorEndpointUseCase.execute(url, {...rest});
  });

export const endpointExecutorRouter = router({endpointExecutor});
