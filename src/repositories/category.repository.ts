import { Category } from '../types/categories/category.type';
import { CreateCategoryDto } from '../types/categories/create-category.dto';
import { UpdateCategoryDto } from '../types/categories/update-category.dto';

export class CategoryRepository {
  async findAll(): Promise<Category[]> {
    return [];
  }

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

  async update(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return {
      id: updateCategoryDto.id,
      title: updateCategoryDto.title,
      description: updateCategoryDto.description,
      ownerId: updateCategoryDto.ownerId,
    };
  }

  async delete(id: string): Promise<boolean> {
    return true;
  }
}
