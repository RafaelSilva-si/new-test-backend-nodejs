import { ProductRepository } from '../../repositories/product.repository';
import { Product } from '../../types/product/product.type';
import { FindAllProductService } from './find-all-product.service';

export const mockProducts: Product[] = [
  {
    id: '101',
    title: 'Smartphone',
    description: 'Latest model with high-end features.',
    price: 999.99,
    category: 'Technology',
    ownerId: '123',
  },
  {
    id: '102',
    title: 'Yoga Mat',
    description: 'Eco-friendly mat for daily exercises.',
    price: 49.99,
    category: 'Health',
    ownerId: '456',
  },
  {
    id: '103',
    title: 'Investment Book',
    description: 'Learn the basics of investing and finance.',
    price: 19.99,
    category: 'Finance',
    ownerId: '789',
  },
];

describe('FindAll Product Service', () => {
  let findAllProductService: FindAllProductService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    findAllProductService = new FindAllProductService(productRepository);
  });

  it('should return all data', async () => {
    const ownerId = '123';
    const filteredProducts = mockProducts.filter(
      (product) => product.ownerId === ownerId
    );

    jest
      .spyOn(findAllProductService, 'execute')
      .mockResolvedValue(filteredProducts);

    const result = await findAllProductService.execute(ownerId);

    expect(result).toBe(filteredProducts);
    expect(result.length).toBe(1);
  });
});
