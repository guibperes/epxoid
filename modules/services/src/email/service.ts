import { Database } from '../database';

import { EmailRepository } from './repository';
import { Email } from './entity';
import { EmailCreateDTO } from './dto';

const getEmailRepository = () => Database.getRepository(EmailRepository);

const findAll = async (): Promise<Email[]> => {
  const repository = getEmailRepository();

  return repository.find();
};

const save = async (emailCreateDTO: EmailCreateDTO): Promise<Email> => {
  const repository = getEmailRepository();

  const email = Email.of(emailCreateDTO);
  const emailSaved = await repository.save(email);

  return emailSaved;
};

export const EmailService = { findAll, save };
