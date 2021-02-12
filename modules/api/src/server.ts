import http from 'http';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { logger, loggerMiddleware } from '@epxoid/libs';
import { Database } from '@epxoid/services';

import { Env } from './config';
import { routes } from './routes';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(routes);

const start = async () => {
  try {
    logger.info('Server startup process started');

    Database.createConnection(Env.MONGODB_URL);
    await Database.connect();

    server.listen(5000, () => logger.info('Server is running on port 5000'));
  } catch (error) {
    logger.error('Server startup process failed');
    logger.error(error);

    process.exit(1);
  }
};

const shutdown = async () => {
  try {
    logger.info('Server shutdown process started');

    await Database.disconnect();

    server.close();
    logger.info('Shutdown process finished');

    process.exit(0);
  } catch (error) {
    logger.error('Server shutdown proces failed');
    logger.error(error);

    process.exit(1);
  }
};

export { start, shutdown };
