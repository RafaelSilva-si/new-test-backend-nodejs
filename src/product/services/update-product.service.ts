import { MissingParamError } from '../../errors/throw-missing-param.error';
import { UpdateProductDto } from '../types/update-product-dto';

export class UpdateProductService {
  async execute(id: string, updateProductDto: UpdateProductDto) {
    const requiredFields = ['ownerId'];
    for (const field of requiredFields) {
      if (updateProductDto[field as keyof UpdateProductDto] === undefined) {
        throw new MissingParamError(field);
      }
    }
    return updateProductDto;
  }
}
