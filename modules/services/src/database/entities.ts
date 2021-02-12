import { EntitySchema } from 'typeorm';

import { Email } from '../email';

const entities: string[] | Function[] | EntitySchema<any>[] = [Email];

export { entities };
