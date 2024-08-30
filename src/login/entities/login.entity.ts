// 定义实体
import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Login {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: '登录账户' })
  @Column()
  username: string;

  @Field(() => String, { description: '登录密码' })
  @Column()
  password: string;
}
