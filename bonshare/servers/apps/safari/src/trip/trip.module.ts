import { Module } from '@nestjs/common';
import { TripResolver } from './trip.resolver';
import { TripController } from './trip.controller';

@Module({
  providers: [TripResolver],
  controllers: [TripController]
})
export class TripModule {}
