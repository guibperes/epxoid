import { ConnectionManager, Connection, ObjectType } from 'typeorm';
import { Email } from '@epxoid/services';

import { logger } from '../libs';
import { DotEnv } from './env';

const manager = new ConnectionManager();

const createConnection = (): Connection =>
  manager.create({
    type: 'mongodb',
    url: DotEnv.MONGODB_URL,
    synchronize: false,
    useUnifiedTopology: true,
    entities: [Email],
  });

const getConnection = () => manager.get();

const connect = async () => {
  try {
    const connection = createConnection();
    await connection.connect();

    logger.info('Connected on database');
  } catch (error) {
    logger.error('Cannot connect on database');
    logger.error(error);

    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    const connection = getConnection();
    await connection.close();

    logger.info('Disconnected on database');
  } catch (error) {
    logger.error('Cannot disconnect on database');
    logger.error(error);

    process.exit(1);
  }
};

const getRepository = <T>(entityType: ObjectType<T>) =>
  getConnection().getCustomRepository(entityType);

export const Database = { connect, disconnect, getConnection, getRepository };
