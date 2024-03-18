import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const config = new ConfigService();
  const host = config.get('USER_SERVICE_HOST');
  const port = Number(config.get('USER_SERVICE_PORT'));

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      logger: false,
      options: {
        host,
        port,
      },
    },
  );

  console.log(`User Microservice is running on ${host}:${port}`);

  await app.listen();
}
bootstrap();
