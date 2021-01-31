import { Container as ContainerIOC, LifeTime } from 'container-ioc';
import { RegistrationProvider } from 'container-ioc/dist/lib/interfaces';

const container = new ContainerIOC({ defaultLifeTime: LifeTime.PerRequest });

const register = (provider: RegistrationProvider[]): void =>
  container.register(provider);

const resolve = (token: any) => container.resolve(token);

export const Container = { register, resolve };
