import { MissingParamError, NotFoundError } from '../../errors/index.error';
import {
  CategoryRepository,
  ProductRepository,
} from '../../repositories/index.repository';
import { AssociateCategoryProductDto } from '../../types/product/associate-category-product.dto';
import { Product } from '../../types/product/product.type';

export class AssociateCategoryProductService {
  constructor(
    readonly productRepository: ProductRepository,
    readonly categoryRepository: CategoryRepository
  ) {}

  async execute(
    associateCategoryProductDto: AssociateCategoryProductDto
  ): Promise<Product> {
    const requiredFields = ['productId', 'categoryId', 'ownerId'];
    for (const field of requiredFields) {
      if (
        associateCategoryProductDto[
          field as keyof AssociateCategoryProductDto
        ] === undefined
      ) {
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

    const category = await this.categoryRepository.findById(
      associateCategoryProductDto.categoryId,
      associateCategoryProductDto.ownerId
    );

    if (!category) {
      throw new NotFoundError('Category not found');
    }

    return await this.productRepository.associateCategory(
      associateCategoryProductDto
    );
  }
}
