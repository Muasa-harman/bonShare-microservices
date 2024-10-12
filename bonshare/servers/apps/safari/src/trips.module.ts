import { Module } from '@nestjs/common';
import { TripService } from './trips.service';
import { TripResolver } from './trips.resolver';
import { TripController } from './trips.controller';

@Module({
  providers: [TripService, TripResolver],
  controllers: [TripController]
})
export class TripModule {}
