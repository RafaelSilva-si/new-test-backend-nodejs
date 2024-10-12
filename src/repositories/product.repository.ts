import { CreateProductDto } from '../product/types/create-product-dto';
import { Product } from '../product/types/product.type';

export class ProductRepository {
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return {
      id: '1',
      ...createProductDto,
    };
  }

  async findById(id: string): Promise<Product | null> {
    return {
      id,
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      ownerId: '1',
    };
  }
}
