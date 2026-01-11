import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // GET /products
  @Get()
  async getAllProducts() {
    return this.productService.findAll();
  }

  // GET /products/:id
  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findById(id);
  }
}
