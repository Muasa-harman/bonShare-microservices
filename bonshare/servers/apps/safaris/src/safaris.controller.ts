import { Controller, Get } from '@nestjs/common';
import { SafarisService } from './safaris.service';

@Controller()
export class SafarisController {
  constructor(private readonly safarisService: SafarisService) {}

  @Get()
  getHello(): string {
    return this.safarisService.getHello();
  }
}
