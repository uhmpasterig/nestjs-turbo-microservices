import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const api_gateway_port = configService.get('GATEWAY_PORT');
  const api_gateway_host = configService.get('GATEWAY_HOST');
  console.log(
    `API Gateway is running on ${api_gateway_host}:${api_gateway_port}`,
  );
  await app.listen(api_gateway_port, api_gateway_host);
}
bootstrap();
