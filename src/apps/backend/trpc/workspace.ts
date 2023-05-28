import {publicProcedure, router} from './trpc-config';
import {CreateWorkSpaceUseCase} from '../../../Contexts/Backoffice/Workspace/application/CreateWorkSpaceUseCase';
import {GetWorkSpacesUseCase} from '../../../Contexts/Backoffice/Workspace/application/GetWorkSpacesUseCase';
import {UpdateWorkSpaceUseCase} from '../../../Contexts/Backoffice/Workspace/application/UpdateWorkSpaceUseCase';
import {MongoWorkSpaceRepository} from '../../../Contexts/Backoffice/Workspace/infrastructure/mongoose/MongoWorkSpaceRepository';
import {WorkSpace} from '../../../Contexts/Backoffice/Workspace/domain/entity/WorkSpace';

const repository = new MongoWorkSpaceRepository();
const getWorkspaceuseCase = new GetWorkSpacesUseCase(repository);
const createUsecase = new CreateWorkSpaceUseCase(repository);
const updateUsecase = new UpdateWorkSpaceUseCase(repository);

const getWorkSpaces = publicProcedure
  .input((query: Record<string, unknown>) => query)
  .query(async ({input}) => {
    console.log('INPUT :::', input);
    return getWorkspaceuseCase.execute();
  });

const createWorkSpace = publicProcedure
  .input((value: WorkSpace) => value)
  .mutation(async ({input}) => {
    return createUsecase.execute(input);
  });

const updateWorkSpace = publicProcedure
  .input((workspace: WorkSpace) => workspace)
  .mutation(async ({input}) => {
    return updateUsecase.execute(input.id, input);
  });

export const workspaceRouter = router({
  getWorkSpaces,
  createWorkSpace,
  updateWorkSpace,
});
