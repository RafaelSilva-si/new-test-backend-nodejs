import { Category } from '../categories/types/category.type';
import { CreateCategoryDto } from '../categories/types/create-category.dto';

export class CategoryRepository {
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return {
      id: '1',
      ...createCategoryDto,
    };
  }

  async findById(id: string, ownerId: string): Promise<Category | null> {
    return {
      id: '1',
      title: 'Teste',
      description: 'Teste',
      ownerId: ownerId,
    };
  }
}
