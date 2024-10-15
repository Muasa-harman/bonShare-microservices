import { Module } from '@nestjs/common';
import { SafarisController } from './safaris.controller';
import { SafarisService } from './safaris.service';

@Module({
  imports: [],
  controllers: [SafarisController],
  providers: [SafarisService],
})
export class SafarisModule {}
