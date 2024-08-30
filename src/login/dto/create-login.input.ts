import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoginInput {
  @Field(() => String, { description: '登录账户' })
  userName: string;

  @Field(() => String, { description: '登录密码' })
  password: string;
}
