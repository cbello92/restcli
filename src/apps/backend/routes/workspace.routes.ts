import {Router} from 'express';
import {GetWorkSpaceController} from '../controllers/getWorkspace.controller';
import {WorkSpaceRepository} from '../../../Contexts/Backoffice/Workspace/infrastructure/mongoose/schema/WorkSpaceRepository';
import {GetWorkSpacesUseCase} from '../../../Contexts/Backoffice/Workspace/application/GetWorkSpacesUseCase';
import {CreateWorkSpaceUseCase} from '../../../Contexts/Backoffice/Workspace/application/CreateWorkSpaceUseCase';
import {CreateWorkSpaceController} from '../controllers/createWorkSpace.controller';

const router = Router();
const repository = new WorkSpaceRepository();
const useCase = new GetWorkSpacesUseCase(repository);
const getWorkSpace = new GetWorkSpaceController(useCase);

const createUsecase = new CreateWorkSpaceUseCase(repository);
const createWorkSpace = new CreateWorkSpaceController(createUsecase);

router.get('/', getWorkSpace.run.bind(getWorkSpace));
router.post('/create', createWorkSpace.run.bind(createWorkSpace));

export default router;
