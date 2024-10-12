import { CreateCategoryService } from './create-category.service';

describe('Create Category', () => {
  let createCategoryService: CreateCategoryService;

  beforeEach(() => {
    createCategoryService = new CreateCategoryService();
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
});
