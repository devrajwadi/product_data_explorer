import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { Navigation } from '../navigation/navigation.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    @InjectRepository(Navigation)
    private navigationRepository: Repository<Navigation>,
  ) {}

  async findByNavigation(slug: string) {
    return this.categoryRepository.find({
      relations: ['navigation'],
      where: { navigation: { slug } },
    });
  }

  async saveMany(categories: Partial<Category>[]) {
    return this.categoryRepository.save(categories);
  }
}
