import { ConnectionManager, Connection, ObjectType } from 'typeorm';
import { Email } from '@epxoid/services';

import { logger } from '../libs';

const manager = new ConnectionManager();

const createConnection = (): Connection =>
  manager.create({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'epxoid',
    synchronize: true,
    logging: true,
    entities: [Email],
    useUnifiedTopology: true,
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
