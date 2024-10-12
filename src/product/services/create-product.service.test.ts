import { ProductRepository } from '../../repositories/index.repository';
import { CreateProductService } from './create-product.service';

describe('Create Product', () => {
  let createProductService: CreateProductService;
  beforeEach(() => {
    createProductService = new CreateProductService(new ProductRepository());
  });

  it('should returns error if fields are missing', async () => {
    const requestData = {
      // title: '',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      ownerId: 'teste',
    };

    await expect(
      createProductService.execute(requestData as any)
    ).rejects.toThrow('Missing param: title');
  });

  it('should create a product if all fields are provided', async () => {
    const requestData = {
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      ownerId: 'teste',
    };

    const result = await createProductService.execute(requestData);

    expect(result).toEqual({ id: expect.any(String), ...requestData });
  });
});
