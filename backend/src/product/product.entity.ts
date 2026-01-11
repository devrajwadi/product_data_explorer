import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  // ID from World of Books (used for deduplication)
  @Column({ unique: true })
  sourceId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  currency: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column()
  sourceUrl: string;

  @Column({ type: 'timestamp', nullable: true })
  lastScrapedAt: Date;
}
