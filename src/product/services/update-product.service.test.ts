import { UpdateProductService } from './update-product.service';

describe('Update Product', () => {
  let updateProductService: UpdateProductService;

  beforeEach(() => {
    updateProductService = new UpdateProductService();
  });

  it('should returns error if fields are missing', async () => {
    const requestId = '1';
    const requestData = {
      title: '',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      //   ownerId: 'teste',
    };

    await expect(
      updateProductService.execute(requestId, requestData as any)
    ).rejects.toThrow('Missing param: ownerId');
  });
});
