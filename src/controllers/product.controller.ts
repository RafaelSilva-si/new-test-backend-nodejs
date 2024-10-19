import { FindAllProductService } from '../services/product/find-all-product.service';

export class ProductController {
  constructor(private readonly findAllProductService: FindAllProductService) {}

  async findAll(req: any, res: any) {
    const ownerId = req.query.ownerId;

    const results = await this.findAllProductService.execute(ownerId);

    return {
      statusCode: 200,
      results,
    };
  }
}
