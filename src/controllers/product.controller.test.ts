import { ProductRepository } from '../repositories/product.repository';
import { FindAllProductService } from '../services/product/find-all-product.service';
import { mockProducts } from '../services/product/find-all-product.service.test';
import { ProductController } from './product.controller';

describe('Product controller', () => {
  let productRepository: ProductRepository;
  let findAllProductService: FindAllProductService;
  let productController: ProductController;

  beforeEach(() => {
    productRepository = new ProductRepository();

    findAllProductService = new FindAllProductService(productRepository);
    productController = new ProductController(findAllProductService);
  });

  it('should findAll controller returns success', async () => {
    jest
      .spyOn(findAllProductService, 'execute')
      .mockResolvedValue(mockProducts);

    const results = await productController.findAll(
      {
        query: { ownerId: '123' },
      },
      {}
    );

    expect(results).toStrictEqual({
      statusCode: 200,
      results: mockProducts,
    });
  });
});
