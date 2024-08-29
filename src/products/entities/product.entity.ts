import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: '产品价格' })
  price: number;
  @Field(() => String, { description: '产品名称' })
  name: string;
}
