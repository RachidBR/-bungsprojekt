import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsUrl,
} from 'class-validator';

export class CreateLandmarkDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  country: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  location?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  historical_context?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  year_built?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  architect?: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  image_url?: string;
}
