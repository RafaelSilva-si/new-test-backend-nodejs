import { ProductRepository } from '../../repositories/product.repository';
import { AssociateCategoryProductService } from './associate-category-product.service';

describe('Associate Category Product', () => {
  let productRepository: ProductRepository;
  let associateCategoryProductService: AssociateCategoryProductService;
  beforeEach(() => {
    productRepository = new ProductRepository();
    associateCategoryProductService = new AssociateCategoryProductService(
      productRepository
    );
  });

  it('should returns error if fields are missing', async () => {
    const requestData = {
      // productId: '',
      categoryId: '1',
      ownerId: '1',
    };

    await expect(
      associateCategoryProductService.execute(requestData as any)
    ).rejects.toThrow('Missing param: productId');
  });

  it('should returns error if productId not found', async () => {
    const requestData = {
      productId: '1',
      categoryId: '1',
      ownerId: '1',
    };

    jest.spyOn(productRepository, 'findById').mockResolvedValue(null);

    await expect(
      associateCategoryProductService.execute(requestData as any)
    ).rejects.toThrow('Product not found');
  });
});
