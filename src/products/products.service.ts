import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource
  ) {

  }
  create(createProductInput: CreateProductInput) {
    const product = new Product()
    product.name = createProductInput.name
    product.price = createProductInput.price
    const productRepository = this.dataSource.getRepository(Product);
    productRepository.save(product)
    return product
  }

  findAll() {
    const productRepository = this.dataSource.getRepository(Product);
    return productRepository.find()
  }

  findOne(id: number) {
    const productRepository = this.dataSource.getRepository(Product);
    return productRepository.findOneBy({ id })
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
