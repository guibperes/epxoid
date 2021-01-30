import { Repository, EntityRepository } from 'typeorm';

import { Email } from './Email';

@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {}
