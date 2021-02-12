import { DotEnv } from '@epxoid/libs';

DotEnv.config();

export const Env = {
  MONGODB_URL: DotEnv.envToString('MONGODB_URL'),
};
