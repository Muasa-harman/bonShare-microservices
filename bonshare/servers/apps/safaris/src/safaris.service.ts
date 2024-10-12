import { Injectable } from '@nestjs/common';

@Injectable()
export class SafarisService {
  getHello(): string {
    return 'Hello World!';
  }
}
