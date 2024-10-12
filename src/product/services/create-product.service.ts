import { MissingParamError } from '../../errors/index.error';
import { ProductRepository } from '../../repositories/index.repository';
import { CreateProductDto } from '../types/create-product-dto';
import { Product } from '../types/product.type';

export class CreateProductService {
  constructor(readonly productRepository: ProductRepository) {}
  async execute(createProductDto: CreateProductDto): Promise<Product> {
    const requiredFields = ['title', 'description', 'price', 'ownerId'];
    for (const field of requiredFields) {
      if (createProductDto[field as keyof CreateProductDto] === undefined) {
        throw new MissingParamError(field);
      }
    }

    return await this.productRepository.create(createProductDto);
  }
}
