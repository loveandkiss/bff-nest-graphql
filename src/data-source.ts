import "reflect-metadata"
import { DataSource, DataSourceOptions } from 'typeorm'
import { Product } from './products/entities/product.entity'

export const config: DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root", // 账户
    password: "123456", // 密码
    database: "test", // 数据库名
    synchronize: true, // 自动同步实体和数据库结构，确保在生产环境中关闭这个选项。
    logging: true,
    entities: [Product],
    subscribers: [],
    migrations: [],
}
export const AppDataSource = new DataSource(config)