import { CreateProductDto } from '../product/types/create-product-dto';
import { Product } from '../product/types/product.type';

export class ProductRepository {
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return {
      id: '1',
      ...createProductDto,
    };
  }
}
