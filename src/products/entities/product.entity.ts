import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  @Field(() => String, { description: '产品名称' })
  name: string;
}
