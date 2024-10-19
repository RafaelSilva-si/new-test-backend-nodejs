import { CategoryRepository } from '../../repositories/category.repository';
import { UpdateCategoryService } from './update-category.service';

describe('Update Product', () => {
  let updateCategoryService: UpdateCategoryService;
  let categoryRepository: CategoryRepository;

  beforeEach(() => {
    categoryRepository = new CategoryRepository();
    updateCategoryService = new UpdateCategoryService(categoryRepository);
  });

  it('Should returns error if required fields are missing', async () => {
    const requestData = {
      //   id: '1',
      title: '',
      description: 'Teste',
      //   ownerId: 'teste',
    };

    await expect(
      updateCategoryService.execute(requestData as any)
    ).rejects.toThrow('Missing param: id');
  });

  it("should returns error if category doesn't exists", async () => {
    const requestData = {
      id: '1',
      title: 'Teste',
      description: 'Teste',
      ownerId: 'teste',
    };

    jest.spyOn(categoryRepository, 'findById').mockResolvedValueOnce(null);

    await expect(
      updateCategoryService.execute(requestData as any)
    ).rejects.toThrow('Category not found');
  });

  it('should update a category if all fields are provided', async () => {
    const requestData = {
      id: '1',
      title: 'Teste',
      description: 'Teste2',
      ownerId: 'teste',
    };

    const result = await updateCategoryService.execute(requestData);

    expect(result).toMatchObject({
      id: '1',
      title: 'Teste',
      description: 'Teste2',
      ownerId: 'teste',
    });
  });
});
