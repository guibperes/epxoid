import { Router } from 'express';

import { EmailRoutes } from './modules';

const routes = Router();

routes.use('/emails', EmailRoutes);
routes.get('/status', (req, res) => res.json({ ok: true }));

export { routes };
