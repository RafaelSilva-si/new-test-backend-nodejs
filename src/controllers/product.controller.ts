import { FindAllProductService } from '../services/product/find-all-product.service';
import { CreateProductService } from '../services/product/create-product.service';
import { UpdateProductService } from '../services/product/update-product.service';
import { DeleteProductService } from '../services/product/delete-product.service';
import { Request, Response } from 'express';
import { AssociateCategoryProductService } from '../services/product/associate-category-product.service';

export class ProductController {
  constructor(
    private readonly findAllProductService: FindAllProductService,
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
    private readonly associateCategoryProductService: AssociateCategoryProductService
  ) {}

  async findAll(req: Request, res: Response) {
    try {
      const ownerId = req.query.ownerId as string;
      const results = await this.findAllProductService.execute(ownerId);

      return res.status(200).json({
        statusCode: 200,
        results,
      });
    } catch (error: any) {
      const statusCode = error.statusCode || 500;

      return res.status(statusCode).json({
        error: error.message,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const productData = req.body;
      const newProduct = await this.createProductService.execute(productData);

      return res.status(201).json({
        statusCode: 201,
        product: newProduct,
      });
    } catch (error: any) {
      const statusCode = error.statusCode || 500;

      return res.status(statusCode).json({
        error: error.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      const productData = { ...req.body, productId };
      const updatedProduct =
        await this.updateProductService.execute(productData);

      return res.status(200).json({
        statusCode: 200,
        product: updatedProduct,
      });
    } catch (error: any) {
      const statusCode = error.statusCode || 500;

      return res.status(statusCode).json({
        error: error.message,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      await this.deleteProductService.execute(productId);

      return res.status(204).send();
    } catch (error: any) {
      const statusCode = error.statusCode || 500;

      return res.status(statusCode).json({
        error: error.message,
      });
    }
  }

  async associateCategoryProduct(req: Request, res: Response) {
    try {
      const associateData = req.body;
      await this.associateCategoryProductService.execute(associateData);

      return res.status(204).send();
    } catch (error: any) {
      const statusCode = error.statusCode || 500;

      return res.status(statusCode).json({
        error: error.message,
      });
    }
  }
}
