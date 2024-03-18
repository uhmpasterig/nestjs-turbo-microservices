import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, EMPTY } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  @Get('sum')
  async getSum() {
    console.log('inc');
    const test = await this.client.send({ cmd: 'sum' }, [10, 20, 30]);
    return test;
  }
}