import { ConnectionManager, Connection } from 'typeorm';

const manager = new ConnectionManager();

const createConnection = (entities: Function[]): Connection =>
  manager.create({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'epxoid',
    synchronize: true,
    logging: true,
    entities,
    useUnifiedTopology: true,
  });

const getConnection = () => manager.get();

export const Database = { createConnection, getConnection };
