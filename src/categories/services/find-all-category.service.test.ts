import { CategoryRepository } from '../../repositories/category.repository';
import { Category } from '../types/category.type';
import { FindAllCategoryService } from './find-all-category.service';

export const mockCategories: Category[] = [
  {
    id: '1',
    title: 'Technology',
    description: 'All things related to technology.',
    ownerId: '123',
  },
  {
    id: '2',
    title: 'Health',
    description: 'Topics about health and wellness.',
    ownerId: '456',
  },
  {
    id: '3',
    title: 'Finance',
    description: 'Discussions on finance and investments.',
    ownerId: '789',
  },
];

describe('FindAll Category Service', () => {
  let findAllCategoryService: FindAllCategoryService;
  let categoryRepository: CategoryRepository;

  beforeEach(() => {
    categoryRepository = new CategoryRepository();
    findAllCategoryService = new FindAllCategoryService(categoryRepository);
  });

  it('should return all data', async () => {
    jest
      .spyOn(findAllCategoryService, 'execute')
      .mockResolvedValue(mockCategories);

    const result = await findAllCategoryService.execute();

    expect(result).toBe(mockCategories);
    expect(result.length).toBe(3);
  });
});
