import dotenv from 'dotenv';

dotenv.config();

const envToString = (env: string) => process.env[env] ?? '';

export const DotEnv = {
  MONGODB_URL: envToString('MONGODB_URL'),
};
