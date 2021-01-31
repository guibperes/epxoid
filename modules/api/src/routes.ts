import { Router } from 'express';

const routes = Router();

routes.get('/status', (req, res) => res.json({ ok: true }));

export { routes };
