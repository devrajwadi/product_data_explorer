import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Navigation } from './navigation.entity';
import { ScrapeService } from '../scrape/scrape.service';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(Navigation)
    private readonly navigationRepository: Repository<Navigation>,
    private readonly scrapeService: ScrapeService,
  ) {}

  async findAll() {
    // 1. Return cached data if already exists
    const existing = await this.navigationRepository.find();
    if (existing.length > 0) {
      return existing;
    }

    // 2. Scrape navigation
    const scraped = await this.scrapeService.scrapeNavigation();

    // 3. Deduplicate by slug
    const uniqueMap = new Map<string, { title: string; slug: string }>();
    for (const item of scraped) {
      if (!uniqueMap.has(item.slug)) {
        uniqueMap.set(item.slug, item);
      }
    }

    const uniqueItems = Array.from(uniqueMap.values());

    // 4. Save to DB
    const entities = uniqueItems.map((item) =>
      this.navigationRepository.create({
        title: item.title,
        slug: item.slug,
        lastScrapedAt: new Date(),
      }),
    );

    await this.navigationRepository.save(entities);
    return entities;
  }
}
