import { CreateProductInput } from './create-product.input';
import {
  InputType,
  Field,
  Int,
  PartialType
} from '@nestjs/graphql';

// 定义创建用户输入类型
@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}
