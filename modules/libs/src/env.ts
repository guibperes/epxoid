import dotenv, { DotenvConfigOptions } from 'dotenv';

const config = (options: DotenvConfigOptions = {}) => dotenv.config(options);

const envToString = (env: string) => process.env[env] ?? '';

export const DotEnv = { config, envToString };
