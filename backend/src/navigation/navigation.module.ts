import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Navigation } from './navigation.entity';
import { NavigationController } from './navigation.controller';
import { NavigationService } from './navigation.service';
import { ScrapeService } from '../scrape/scrape.service';

@Module({
  imports: [TypeOrmModule.forFeature([Navigation])],
  controllers: [NavigationController],
  providers: [NavigationService, ScrapeService],
})
export class NavigationModule {}
