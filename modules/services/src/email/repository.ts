import { MongoRepository, EntityRepository } from 'typeorm';

import { Email } from './entity';

@EntityRepository(Email)
export class EmailRepository extends MongoRepository<Email> {}
