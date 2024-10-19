import { MissingParamError } from '../../errors/throw-missing-param.error';
import { NotFoundError } from '../../errors/throw-not-found.error';
import { CategoryRepository } from '../../repositories/category.repository';

export class DeleteCategoryService {
  constructor(readonly categoryRepository: CategoryRepository) {}

  async execute(deleteCategoryDto: any): Promise<boolean> {
    const requiredFields = ['id', 'ownerId'];
    for (const field of requiredFields) {
      if (deleteCategoryDto[field] === undefined) {
        throw new MissingParamError(field);
      }
    }

    const category = await this.categoryRepository.findById(
      deleteCategoryDto.id,
      deleteCategoryDto.ownerId
    );

    if (!category) {
      throw new NotFoundError('Category not found');
    }

    return await this.categoryRepository.delete(deleteCategoryDto.id);
  }
}
