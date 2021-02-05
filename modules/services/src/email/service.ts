import { Injectable, Inject } from 'container-ioc';

import { EmailRepository } from './repository';
import { Email } from './entity';

@Injectable()
export class EmailService {
  constructor(@Inject(EmailRepository) private repository: EmailRepository) {}

  public async findAll(): Promise<Email[]> {
    return this.repository.find();
  }
}
