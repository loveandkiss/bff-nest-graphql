import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: 'bff/graphql', // 指定 GraphQL 请求的路径 =>  默认情况下，GraphQL 服务器通常在 /graphql 路径上运行。 http://127.0.0.1:9000/graphql => 现需要改成 http://127.0.0.1:9000/bff/graphql
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true
    }),
    ProductsModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
