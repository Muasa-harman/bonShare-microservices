import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
           subgraphs: [
            {
              name: 'user',
              url: 'http://localhost:4001/graphql',
            },
            {
              name: 'safaris',
              url: 'http://localhost:4002/graphql',
            },
           ], }),
      },
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
