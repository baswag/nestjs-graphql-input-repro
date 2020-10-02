import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { TestObjectResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true, context: (req) => req }),
  ],
  controllers: [AppController],
  providers: [AppService, TestObjectResolver],
})
export class AppModule {}
