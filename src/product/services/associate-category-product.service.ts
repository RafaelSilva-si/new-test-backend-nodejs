import { MissingParamError } from '../../errors/throw-missing-param.error';
import { NotFoundError } from '../../errors/throw-not-found.error';
import { ProductRepository } from '../../repositories/product.repository';

export class AssociateCategoryProductService {
  constructor(readonly productRepository: ProductRepository) {}

  async execute(associateCategoryProductDto: any) {
    const requiredFields = ['productId', 'categoryId', 'ownerId'];
    for (const field of requiredFields) {
      if (associateCategoryProductDto[field as keyof any] === undefined) {
        throw new MissingParamError(field);
      }
    }

    const product = await this.productRepository.findById(
      associateCategoryProductDto.productId,
      associateCategoryProductDto.ownerId
    );

    if (!product) {
      throw new NotFoundError('Product not found');
    }
  }
}
