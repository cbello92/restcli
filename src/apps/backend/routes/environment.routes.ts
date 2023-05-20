import {Router} from 'express';
import {CreateEnvironmentUseCase} from '../../../Contexts/Backoffice/Environments/application/CreateEnvironmentUseCase';
import {CreateEnvironmentController} from '../controllers/environment/createEnvironment.controller';
import {MongoEnvironmentRepository} from '../../../Contexts/Backoffice/Environments/infrastructure/mongoose/schema/MongoEnvironmentRepository';
import {GetEnvironmentController} from '../controllers/environment/getEnvironment.controller';
import {GetEnvironmentUseCase} from '../../../Contexts/Backoffice/Environments/application/GetEnvironmentUseCase';
import {UpdateEnvironmentUseCase} from '../../../Contexts/Backoffice/Environments/application/UpdateEnvironmentUseCase';
import {UpdateEnvironmentController} from '../controllers/environment/updateEnvironment.controller';

const router = Router();

const repository = new MongoEnvironmentRepository();
const createEnvUseCase = new CreateEnvironmentUseCase(repository);
const createEnvCtrl = new CreateEnvironmentController(createEnvUseCase);

const getEnvUseCase = new GetEnvironmentUseCase(repository);
const getEnvCtrl = new GetEnvironmentController(getEnvUseCase);

const updateEnvUseCase = new UpdateEnvironmentUseCase(repository);
const updateEnvCtrl = new UpdateEnvironmentController(updateEnvUseCase);

router.post('/create', createEnvCtrl.run.bind(createEnvCtrl));
router.get('/list', getEnvCtrl.run.bind(getEnvCtrl));
router.patch('/:id', updateEnvCtrl.run.bind(updateEnvCtrl));

export default router;
