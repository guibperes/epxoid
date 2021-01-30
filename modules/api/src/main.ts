import { createConnection } from 'typeorm';

import { Email, EmailRepository } from '@epxoid/services';

createConnection({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'epxoid',
  synchronize: true,
  logging: true,
  entities: [Email],
})
  .then(async connection => {
    const repository = connection.getCustomRepository(EmailRepository);

    const emails = await repository.find();
    console.log(emails);

    // const email = new Email();
    // email.body = 'test';
    // email.subject = 'test';

    // await repository.save(email);
  })
  .catch(error => console.log(error));
