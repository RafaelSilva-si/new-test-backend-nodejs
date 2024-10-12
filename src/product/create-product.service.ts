import { MissingParamError } from '../errors/throw-missing-param.error';
import { Product } from './types/product.type';

export class CreateProductService {
  async execute(product: Partial<Product>) {
    const requiredFields = ['title', 'description', 'price', 'ownerId'];
    for (const field of requiredFields) {
      if (product[field as keyof Product] === undefined) {
        throw new MissingParamError(field);
      }
    }
  }
}
