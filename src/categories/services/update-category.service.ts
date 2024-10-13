import { MissingParamError } from '../../errors/throw-missing-param.error';
import { Category } from '../types/category.type';
import { UpdateCategoryDto } from '../types/update-category.dto';

export class UpdateCategoryService {
  constructor() {}

  async execute(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const requiredFields = ['id', 'ownerId'];

    for (const field of requiredFields) {
      if (updateCategoryDto[field as keyof UpdateCategoryDto] === undefined) {
        throw new MissingParamError(field);
      }
    }

    return updateCategoryDto;
  }
}
