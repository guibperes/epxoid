import { Injectable, Inject } from 'container-ioc';

import { EmailRepository } from './EmailRepository';
import { Email } from './Email';

@Injectable()
export class EmailService {
  constructor(@Inject(EmailRepository) private repository: EmailRepository) {}

  public async findAll(): Promise<Email[]> {
    return this.repository.find();
  }
}
