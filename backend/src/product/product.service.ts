import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Get all products (used for testing + product grid later)
  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Find single product by ID
  async findById(id: number): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { id },
    });
  }

  // Save multiple products (used after scraping)
  async saveMany(products: Partial<Product>[]): Promise<Product[]> {
    const entities = this.productRepository.create(products);
    return this.productRepository.save(entities);
  }

  // Check if product already exists (deduplication)
  async findBySourceId(sourceId: string): Promise<Product | null> {
    return this.productRepository.findOne({
      where: { sourceId },
    });
  }
}
