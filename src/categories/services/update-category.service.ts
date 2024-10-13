import { MissingParamError } from '../../errors/throw-missing-param.error';
import { NotFoundError } from '../../errors/throw-not-found.error';
import { CategoryRepository } from '../../repositories/category.repository';
import { Category } from '../types/category.type';
import { UpdateCategoryDto } from '../types/update-category.dto';

export class UpdateCategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const requiredFields = ['id', 'ownerId'];

    for (const field of requiredFields) {
      if (updateCategoryDto[field as keyof UpdateCategoryDto] === undefined) {
        throw new MissingParamError(field);
      }
    }

    const category = await this.categoryRepository.findById(
      updateCategoryDto.id,
      updateCategoryDto.ownerId
    );

    if (!category) {
      throw new NotFoundError('Category not found');
    }

    return updateCategoryDto;
  }
}
