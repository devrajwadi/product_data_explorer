import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Navigation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  title: string;

  @Column({ type: 'timestamp', nullable: true })
  lastScrapedAt: Date;
}
