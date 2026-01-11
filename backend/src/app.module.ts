import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/datasource';

import { NavigationModule } from './navigation/navigation.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    NavigationModule, // ← THIS IS REQUIRED
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}
