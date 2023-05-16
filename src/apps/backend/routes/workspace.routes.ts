import {Router} from 'express';
import {GetWorkSpaceController} from '../controllers/getWorkspace.controller';
import {WorkSpaceRepository} from '../../../Contexts/Backoffice/Workspace/infrastructure/mongoose/schema/WorkSpaceRepository';
import {GetWorkSpacesUseCase} from '../../../Contexts/Backoffice/Workspace/application/GetWorkSpacesUseCase';

const router = Router();
const repository = new WorkSpaceRepository();
const useCase = new GetWorkSpacesUseCase(repository);
const getWorkSpace = new GetWorkSpaceController(useCase);

router.get('/', getWorkSpace.run.bind(getWorkSpace));

export default router;
