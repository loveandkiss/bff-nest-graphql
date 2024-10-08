import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './data-source'
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [ProductsModule, LoginModule], // 只扫描 ProductsModule， 其它模块将不会被扫描
      path: 'bff/graphql', // 指定 GraphQL 请求的路径 =>  默认情况下，GraphQL 服务器通常在 /graphql 路径上运行。 http://127.0.0.1:9000/graphql => 现需要改成 http://127.0.0.1:9000/bff/graphql
      driver: ApolloDriver, // 指定 GraphQL 服务器引擎 => ApolloDriver 是 Apollo Server 的实现，用于处理 GraphQL 请求和执行
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 自动生成 schema 文件
      debug: true, // 启用调试模式，输出更详细的错误信息。
      playground: true // 启用 GraphQL Playground
    }),
    ProductsModule,
    LoginModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
