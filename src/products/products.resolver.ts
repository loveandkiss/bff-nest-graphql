import { Resolver, ResolveField, Query, Mutation, Args, Int, ArgsType } from '@nestjs/graphql';
import { ProductsService } from './products.service';
// 实体
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) { }

  // 新增产品
  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  // 查询所有的产品
  // @Query()：这是一个装饰器，用于声明一个 GraphQL 查询。它将方法标记为一个可以在 GraphQL 查询中调用的字段。
  // () => [Product]：这是一个返回 GraphQL 类型的函数。[Product] 表示查询的结果是一个 Product 类型的数组。即，这个查询会返回多个 Product 对象，而不是单个对象。
  // { name: 'products' }：这是一个可选的配置对象，name 属性指定了查询字段在 GraphQL 查询中的名称。这里指定的名称是 'products'，所以当你在 GraphQL 查询中请求这个字段时，会使用 products 作为字段名称。
  @Query(() => [Product], { name: 'products' })
  async findAll() {
    const products = await this.productsService.findAll();
    return products
  }

  // 根据id查询产品
  // @Args 装饰器用于定义 GraphQL 查询或变更操作的参数。
  @Query(() => Product, { name: 'product', })
  findOne(@Args('id', { type: () => Int, defaultValue: 1, description: 'The ID of the product to find', deprecationReason: '', nullable: false }) id: number) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productsService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}
