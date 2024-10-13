import { MissingParamError } from '../../errors/throw-missing-param.error';
import { ProductRepository } from '../../repositories/product.repository';

export class DeleteProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(deleteProductDto: any): Promise<void> {
    const requiredFields = ['id', 'ownerId'];

    for (const field of requiredFields) {
      if (deleteProductDto[field] === undefined) {
        throw new MissingParamError(field);
      }
    }

    const product = await this.productRepository.findById(
      deleteProductDto.id,
      deleteProductDto.ownerId
    );

    if (!product) {
      throw new MissingParamError('Product not found');
    }
  }
}
