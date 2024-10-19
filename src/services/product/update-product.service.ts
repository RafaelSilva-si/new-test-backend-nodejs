import { MissingParamError } from '../../errors/throw-missing-param.error';
import { NotFoundError } from '../../errors/throw-not-found.error';
import { ProductRepository } from '../../repositories/product.repository';
import { UpdateProductDto } from '../../types/product/update-product-dto';

export class UpdateProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(updateProductDto: UpdateProductDto) {
    const requiredFields = ['ownerId', 'id'];
    for (const field of requiredFields) {
      if (updateProductDto[field as keyof UpdateProductDto] === undefined) {
        throw new MissingParamError(field);
      }
    }

    const product = await this.productRepository.findById(
      updateProductDto.id,
      updateProductDto.ownerId
    );

    if (!product) {
      throw new NotFoundError('Product not found');
    }
    return await this.productRepository.update(updateProductDto);
  }
}
