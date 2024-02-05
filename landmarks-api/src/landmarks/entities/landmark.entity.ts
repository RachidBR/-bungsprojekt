import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
  @IsString()
  id: number;

  @Column({ length: 100 })
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ length: 50 })
  @ApiProperty()
  @IsString()
  @IsOptional()
  country: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @Column('text', { nullable: true })
  @ApiProperty()
  @IsString()
  @IsOptional()
  historical_context?: string;

  @Column({ nullable: true })
  @ApiProperty()
  @IsString()
  @IsOptional()
  year_built?: number;

  @Column({ length: 100, nullable: true })
  @ApiProperty()
  @IsString()
  @IsOptional()
  architect?: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty()
  @IsString()
  @IsOptional()
  image_url?: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
