import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
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
}