import { Router } from 'express';

import { EmailController } from './controller';

const routes = Router();

routes.get('/', EmailController.findAll);
routes.post('/', EmailController.save);

export const EmailRoutes = routes;
