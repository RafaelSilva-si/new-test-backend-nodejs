import { DeleteProductService } from './delete-product.service';

describe('Delete Product', () => {
  let deleteProductService: DeleteProductService;

  beforeEach(() => {
    deleteProductService = new DeleteProductService();
  });

  it('should returns error if fields are missing', async () => {
    const requestData = {
      //   id: '',
      ownerId: 'teste',
    };

    await expect(
      deleteProductService.execute(requestData as any)
    ).rejects.toThrow('Missing param: id');
  });
});
