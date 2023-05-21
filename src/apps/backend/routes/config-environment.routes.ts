import {Router} from 'express';
import {MongoConfigEnvironmentRepository} from '../../../Contexts/Backoffice/ConfigEnvironments/infrastructure/mongoose/MongoConfigEnvironmentRepository';
import {CreateConfigEnvironmentUseCase} from '../../../Contexts/Backoffice/ConfigEnvironments/application/CreateConfigEnvironmentUseCase';
import {CreateConfifEnvironmentController} from '../controllers/config-environment/createConfigEnvironment.controller';

const router = Router();

const repository = new MongoConfigEnvironmentRepository();
const createConfigEnvUseCase = new CreateConfigEnvironmentUseCase(repository);
const createConfigEnvController = new CreateConfifEnvironmentController(createConfigEnvUseCase);

router.post('/create', createConfigEnvController.run.bind(createConfigEnvController));

export default router;
