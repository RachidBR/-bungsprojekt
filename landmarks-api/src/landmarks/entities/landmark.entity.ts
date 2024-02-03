import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('landmarks')
export class Landmark {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 100 })
  @ApiProperty()
  name: string;

  @Column({ length: 50 })
  @ApiProperty()
  country: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty()
  location?: string;

  @Column('text', { nullable: true })
  @ApiProperty()
  historical_context?: string;

  @Column({ nullable: true })
  @ApiProperty()
  year_built?: number;

  @Column({ length: 100, nullable: true })
  @ApiProperty()
  architect?: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty()
  image_url?: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
