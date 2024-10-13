import { UpdateCategoryService } from './update-category.service';

describe('Update Product', () => {
  let updateCategoryService: UpdateCategoryService;

  beforeEach(() => {
    updateCategoryService = new UpdateCategoryService();
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
});
