import {publicProcedure, router} from './trpc-config';
import {GetVerbHttpUseCase} from '../../../Contexts/Backoffice/VerbsHttp/application/GetVerbHttpUseCase';
import {MongoVerbHttpRepository} from '../../../Contexts/Backoffice/VerbsHttp/infrastructure/MongoVerbHttpRepository';

const repository = new MongoVerbHttpRepository();
const getVerbUseCase = new GetVerbHttpUseCase(repository);

const getVerbs = publicProcedure.query(async () => {
  return getVerbUseCase.execute();
});

export const verbsRouter = router({getVerbs});
