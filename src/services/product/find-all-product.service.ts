import { ProductRepository } from '../../repositories/product.repository';
import { Product } from '../../types/product/product.type';

export class FindAllProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(ownerId: string): Promise<Product[]> {
    return this.productRepository.findAll(ownerId);
  }
}
