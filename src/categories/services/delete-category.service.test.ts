import { CategoryRepository } from '../../repositories/category.repository';
import { DeleteCategoryService } from './delete-category.service';

describe('Delete Category', () => {
  let categoryRepository: CategoryRepository;
  let deleteCategoryService: DeleteCategoryService;

  beforeEach(() => {
    categoryRepository = new CategoryRepository();

    deleteCategoryService = new DeleteCategoryService(new CategoryRepository());
  });

  it('Should returns error if required fields are missing', async () => {
    const requestData = {
      //   id: '1',
      ownerId: 'teste',
    };

    await expect(
      deleteCategoryService.execute(requestData as any)
    ).rejects.toThrow('Missing param: id');
  });
});
