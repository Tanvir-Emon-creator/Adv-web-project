import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  type: string;

  @IsNumber()
  bedrooms: number;

  @IsNotEmpty()
  contactPhone: string;
}