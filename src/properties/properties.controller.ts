import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.propertiesService.remove(id);
  }
}