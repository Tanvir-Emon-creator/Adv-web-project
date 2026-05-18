import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  location: string;

  @Column()
  type: string; // rent or sale

  @Column()
  bedrooms: number;

  @Column()
  contactPhone: string;

  @ManyToOne(() => User, user => user.id)
  user: User;
}