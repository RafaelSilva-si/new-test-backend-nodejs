import { CategoryRepository } from '../../repositories/category.repository';
import { CreateCategoryService } from './create-category.service';

describe('Create Category', () => {
  let createCategoryService: CreateCategoryService;

  beforeEach(() => {
    createCategoryService = new CreateCategoryService(new CategoryRepository());
  });

  it('should returns error if fields are missing', async () => {
    const requestData = {
      // title: '',
      description: 'Teste',
      ownerId: 'teste',
    };

    await expect(
      createCategoryService.execute(requestData as any)
    ).rejects.toThrow('Missing param: title');
  });

  it('should create a category if all fields are provided', async () => {
    const requestData = {
      title: 'Teste',
      description: 'Teste',
      ownerId: 'teste',
    };

    const response = await createCategoryService.execute(requestData);
    expect(response).toEqual({
      id: '1',
      ...requestData,
    });
  });
});
