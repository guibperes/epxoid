import { EntitySchema } from 'typeorm';
import { Email } from '@epxoid/services';

const entities: string[] | Function[] | EntitySchema<any>[] = [Email];

export { entities };
