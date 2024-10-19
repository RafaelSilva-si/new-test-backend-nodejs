import { CategoryRepository } from '../../repositories/category.repository';
import { Category } from '../types/category.type';

export class FindAllCategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
