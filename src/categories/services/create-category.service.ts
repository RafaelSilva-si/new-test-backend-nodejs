import { MissingParamError } from '../../errors/throw-missing-param.error';
import { Category } from '../types/category.type';
import { CreateCategoryDto } from '../types/create-category.dto';

export class CreateCategoryService {
  constructor() {}
  async execute(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const requiredFields = ['title', 'ownerId'];

    for (const field of requiredFields) {
      if (createCategoryDto[field as keyof CreateCategoryDto] === undefined) {
        throw new MissingParamError(field);
      }
    }

    return {
      id: '1',
      ...createCategoryDto,
    };
  }
}
