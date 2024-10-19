import { FindAllProductService } from '../services/product/find-all-product.service';

export class ProductController {
  constructor(private readonly findAllProductService: FindAllProductService) {}

  async findAll(req: any, res: any) {
    try {
      const ownerId = req.query.ownerId;
      const results = await this.findAllProductService.execute(ownerId);

      return {
        statusCode: 200,
        results,
      };
    } catch (error: any) {
      return {
        statusCode: error.statusCode,
        error: error.message,
      };
    }
  }
}
