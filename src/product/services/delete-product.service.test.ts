import { ProductRepository } from '../../repositories/product.repository';
import { DeleteProductService } from './delete-product.service';

describe('Delete Product', () => {
  let productRepository: ProductRepository;

  let deleteProductService: DeleteProductService;

  beforeEach(() => {
    productRepository = new ProductRepository();
    deleteProductService = new DeleteProductService(productRepository);
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

  it("should returns error if product doesn't exists", async () => {
    const requestData = {
      id: '1',
      ownerId: 'teste',
    };

    jest.spyOn(productRepository, 'findById').mockResolvedValueOnce(null);

    await expect(
      deleteProductService.execute(requestData as any)
    ).rejects.toThrow('Product not found');
  });

  it('should delete a product', async () => {
    const requestData = {
      id: '1',
      ownerId: 'teste',
    };

    jest.spyOn(productRepository, 'delete').mockResolvedValue(true);

    const result = await deleteProductService.execute(requestData);

    await expect(result).toBe(true);
  });
});
