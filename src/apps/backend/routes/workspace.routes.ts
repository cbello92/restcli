import {Router} from 'express';
import {WorkSpaceRepository} from '../../../Contexts/Backoffice/Workspace/infrastructure/mongoose/schema/WorkSpaceRepository';
import {GetWorkSpacesUseCase} from '../../../Contexts/Backoffice/Workspace/application/GetWorkSpacesUseCase';
import {CreateWorkSpaceUseCase} from '../../../Contexts/Backoffice/Workspace/application/CreateWorkSpaceUseCase';
import {CreateWorkSpaceController} from '../controllers/workspace/createWorkSpace.controller';
import {GetWorkSpaceController} from '../controllers/workspace/getWorkspace.controller';
import {UpdateWorkSpaceUseCase} from '../../../Contexts/Backoffice/Workspace/application/UpdateWorkSpaceUseCase';
import {UpdateWorkSpaceController} from '../controllers/workspace/updateWorkSpace.controller';

const router = Router();
const repository = new WorkSpaceRepository();
const useCase = new GetWorkSpacesUseCase(repository);
const getWorkSpaceCtrl = new GetWorkSpaceController(useCase);

const createUsecase = new CreateWorkSpaceUseCase(repository);
const createWorkSpaceCtrl = new CreateWorkSpaceController(createUsecase);

const updateUsecase = new UpdateWorkSpaceUseCase(repository);
const updateWorkSpaceCtrl = new UpdateWorkSpaceController(updateUsecase);

router.get('/', getWorkSpaceCtrl.run.bind(getWorkSpaceCtrl));
router.post('/create', createWorkSpaceCtrl.run.bind(createWorkSpaceCtrl));
router.patch('/:id/update', updateWorkSpaceCtrl.run.bind(updateWorkSpaceCtrl));

export default router;
