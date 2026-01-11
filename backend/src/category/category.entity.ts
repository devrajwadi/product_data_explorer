import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Navigation } from "../navigation/navigation.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @ManyToOne(() => Navigation, { onDelete: "CASCADE" })
  navigation: Navigation;

  @Column({ type: "timestamp", nullable: true })
  lastScrapedAt: Date;
}
