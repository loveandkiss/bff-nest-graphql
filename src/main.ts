import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source'


async function bootstrap() {

  try {
    // 初始化数据源连接
    AppDataSource.initialize()
    console.log('Data Source has been initialized!');
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
}
bootstrap();
