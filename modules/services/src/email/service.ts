import { EmailRepository } from './repository';
import { Email } from './entity';

export class EmailService {
  constructor(private repository: EmailRepository) {}

  public async findAll(): Promise<Email[]> {
    return this.repository.find();
  }
}
