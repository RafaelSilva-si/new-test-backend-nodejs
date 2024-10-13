import { MissingParamError } from '../../errors/throw-missing-param.error';

export class DeleteProductService {
  constructor() {}

  async execute(deleteProductDto: any): Promise<void> {
    const requiredFields = ['id', 'ownerId'];

    for (const field of requiredFields) {
      if (deleteProductDto[field] === undefined) {
        throw new MissingParamError(field);
      }
    }
  }
}
