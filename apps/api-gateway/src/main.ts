import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: false,
    });

    const configService = app.get(ConfigService);
    const port = configService.get('GATEWAY_PORT');
    const host = configService.get('GATEWAY_HOST');
    console.log(`API Gateway is running on ${host}:${port}`);

    await app.listen(port, host);
  } catch (error) {
    console.error('Error starting server:', error);
  }
};
bootstrap();
