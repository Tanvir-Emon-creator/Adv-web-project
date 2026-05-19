import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Like } from 'typeorm';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto) {
    const property = this.propertyRepository.create(createPropertyDto);
    return this.propertyRepository.save(property);
  }

  findAll() {
    return this.propertyRepository.find();
  }

  async remove(id: number) {
    await this.propertyRepository.delete(id);

    return {
      message: 'Property deleted successfully',
    };
  }
  async update(id: number, data: Partial<CreatePropertyDto>) {
  await this.propertyRepository.update(id, data);

  return {
    message: 'Property updated successfully',
  };
}
async search(location?: string, type?: string, bedrooms?: number) {
  const where: any = {};

  if (location) {
    where.location = Like(`%${location}%`);
  }

  if (type) {
    where.type = type;
  }

  if (bedrooms) {
    where.bedrooms = bedrooms;
  }

  return this.propertyRepository.find({ where });
}
}