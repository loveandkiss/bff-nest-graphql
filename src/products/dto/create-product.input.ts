import {
  InputType,
  Int,
  Field
} from '@nestjs/graphql';

// 定义创建用户输入类型
@InputType()
export class CreateProductInput {
  @Field(() => Int, { description: '产品价格' })
  price: number;

  @Field(() => String, { description: '产品名称' })
  name: string
}
