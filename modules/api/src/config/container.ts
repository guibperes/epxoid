import { Container, LifeTime } from 'container-ioc';

import { EmailRepository, EmailService } from '@epxoid/services';
import { Database } from './database';

const container = new Container({ defaultLifeTime: LifeTime.PerRequest });

container.register([
  {
    token: EmailRepository,
    useFactory: () =>
      Database.getConnection().getCustomRepository(EmailRepository),
  },
  {
    token: EmailService,
    lifeTime: LifeTime.Persistent,
    useClass: EmailService,
  },
]);

export { container };
