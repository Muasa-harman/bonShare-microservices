import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { AppController } from './app/app.controller';
import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { EmailModule } from './email/email.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {PrismaService} from '../../../prisma/Prisma.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    EmailModule,
  ],
  // controllers: [UserController, AppController],
  providers: [UserService,ConfigService,JwtService,PrismaService,UserResolver],
})
export class UserModule {}
