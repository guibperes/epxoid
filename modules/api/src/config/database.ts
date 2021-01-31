import { ConnectionManager, Connection } from 'typeorm';

import { Email } from '@epxoid/services';

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

export const Database = { createConnection, getConnection };
