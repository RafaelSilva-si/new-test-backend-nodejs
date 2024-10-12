import { CreateProductService } from './create-product.service';

describe('Create Product', () => {
  it('should returns error if fields are missing', async () => {
    const requestData = {
      // title: '',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      ownerId: 'teste',
    };

    const createProductService = new CreateProductService();
    await expect(createProductService.execute(requestData)).rejects.toThrow(
      'Missing param: title'
    );
  });
});
