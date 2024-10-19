import { ProductRepository } from '../../repositories/product.repository';
import { UpdateProductService } from './update-product.service';

describe('Update Product', () => {
  let updateProductService: UpdateProductService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();

    updateProductService = new UpdateProductService(productRepository);
  });

  it('should returns error if fields are missing', async () => {
    const requestData = {
      id: '1',
      title: '',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      //   ownerId: 'teste',
    };

    await expect(
      updateProductService.execute(requestData as any)
    ).rejects.toThrow('Missing param: ownerId');
  });

  it("should returns error if product doesn't exists", async () => {
    const requestData = {
      id: '1',
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      ownerId: 'teste',
    };

    jest.spyOn(productRepository, 'findById').mockResolvedValueOnce(null);

    await expect(
      updateProductService.execute(requestData as any)
    ).rejects.toThrow('Product not found');
  });

  it('should update a product if all fields are provided', async () => {
    const requestData = {
      id: '1',
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: 'Teste2',
      ownerId: 'teste',
    };

    jest.spyOn(productRepository, 'findById').mockResolvedValueOnce({
      id: '1',
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: 'Teste',
      ownerId: 'teste',
    });

    await expect(
      updateProductService.execute(requestData as any)
    ).resolves.toMatchObject({
      id: '1',
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: 'Teste2',
      ownerId: 'teste',
    });
  });
});
