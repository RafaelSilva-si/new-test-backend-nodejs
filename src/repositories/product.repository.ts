import { AssociateCategoryProductDto } from '../types/product/associate-category-product.dto';
import { CreateProductDto } from '../types/product/create-product-dto';
import { Product } from '../types/product/product.type';
import { UpdateProductDto } from '../types/product/update-product-dto';

export class ProductRepository {
  async findAll(ownerId: string): Promise<Product[]> {
    return [];
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return {
      id: '1',
      ...createProductDto,
    };
  }

  async findById(id: string, ownerId: string): Promise<Product | null> {
    return {
      id,
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: '1',
      ownerId: ownerId,
    };
  }

  async associateCategory(
    associateCategoryProductDto: AssociateCategoryProductDto
  ): Promise<Product> {
    return {
      id: '1',
      title: 'Teste',
      description: 'Teste',
      price: 1,
      category: associateCategoryProductDto.categoryId,
      ownerId: '1',
    };
  }

  async update(updateProductDto: UpdateProductDto): Promise<Product> {
    return {
      id: updateProductDto.id,
      title: updateProductDto.title,
      description: updateProductDto.description,
      price: updateProductDto.price,
      category: updateProductDto.category,
      ownerId: updateProductDto.ownerId,
    };
  }

  async delete(id: string): Promise<boolean> {
    return true;
  }
}
