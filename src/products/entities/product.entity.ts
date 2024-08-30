// 定义实体
import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';
import {
  ObjectType,
  Field,
  Int
} from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: '产品价格' })
  @Column()
  price: number;

  @Field(() => String, { description: '产品名称' })
  @Column()
  name: string;
}
