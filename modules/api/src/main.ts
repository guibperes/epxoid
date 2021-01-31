import { Email, EmailService, EmailRepository } from '@epxoid/services';
import { Database, Container } from './config';

const start = async () => {
  const connection = Database.createConnection([Email]);

  Container.register([
    EmailService,
    {
      token: EmailRepository,
      useFactory: () => connection.getCustomRepository(EmailRepository),
    },
  ]);

  await connection.connect();

  const service: EmailService = Container.resolve(EmailService);
  console.log(await service.findAll());
};
start().catch(error => console.log(error));
