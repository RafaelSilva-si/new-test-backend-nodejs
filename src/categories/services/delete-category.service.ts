import { MissingParamError } from '../../errors/throw-missing-param.error';
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

    return true;
  }
}
