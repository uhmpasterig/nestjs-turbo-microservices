import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    console.log('got it');
    return (data || []).reduce((a, b) => a + b);
  }
}
