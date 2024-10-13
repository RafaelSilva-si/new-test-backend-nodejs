import {
  CategoryRepository,
  ProductRepository,
} from '../../repositories/index.repository';
import { AssociateCategoryProductService } from './associate-category-product.service';

describe('Associate Category Product', () => {
  let productRepository: ProductRepository;
  let categoryRepository: CategoryRepository;
  let associateCategoryProductService: AssociateCategoryProductService;

  beforeEach(() => {
    productRepository = new ProductRepository();
    categoryRepository = new CategoryRepository();

    associateCategoryProductService = new AssociateCategoryProductService(
      productRepository,
      categoryRepository
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

  it('should returns error if categoryId not found', async () => {
    const requestData = {
      productId: '1',
      categoryId: '1',
      ownerId: '1',
    };

    jest.spyOn(categoryRepository, 'findById').mockResolvedValue(null);

    await expect(
      associateCategoryProductService.execute(requestData as any)
    ).rejects.toThrow('Category not found');
  });

  it('should associate a category to a product', async () => {
    const requestData = {
      productId: '1',
      categoryId: '1',
      ownerId: '1',
    };

    jest.spyOn(productRepository, 'findById').mockResolvedValue({
      id: '1',
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: '1',
      ownerId: '1',
    });

    const result = await associateCategoryProductService.execute(requestData);

    expect(result.category).toBe(requestData.categoryId);
  });
});
