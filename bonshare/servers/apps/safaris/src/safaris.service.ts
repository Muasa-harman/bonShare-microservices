import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/Prisma.service';
import { CreateSafariDto } from './dto/safari.dto';
import { Response } from 'express';

@Injectable()
export class SafarisService {
  constructor(private readonly  jwtService:JwtService,
     private readonly prismaService:PrismaService,
     private readonly configService:ConfigService
    ){}

    // create safari
    async createSafari(safariDto:CreateSafariDto,response:Response){
      const {capacity,departure,arrival,date,driver,email,phone_number,images,price,car} = safariDto;

      const trip ={
        driver,
        departure,
        arrival,
        price,
        capacity,
        date
      };
      return trip;
    }

    // get all trips
    async getAllTrips(){
      const trips = [];

      return trips
    }
}
