import { Container as ContainerIOC, LifeTime } from 'container-ioc';

import { EmailRepository, EmailService } from '@epxoid/services';
import { Database } from './database';

const container = new ContainerIOC({ defaultLifeTime: LifeTime.PerRequest });

const register = () =>
  container.register([
    {
      token: EmailRepository,
      useFactory: () => Database.getRepository(EmailRepository),
    },
    {
      token: EmailService,
      lifeTime: LifeTime.Persistent,
      useClass: EmailService,
    },
  ]);

export const Container = { register };
