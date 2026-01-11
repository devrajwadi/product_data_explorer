import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':slug')
  async getCategories(@Param('slug') slug: string) {
    return this.categoryService.findByNavigation(slug);
  }
}
