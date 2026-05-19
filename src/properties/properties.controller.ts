import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Query } from '@nestjs/common';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }
  @Get('search')
search(
  @Query('location') location?: string,
  @Query('type') type?: string,
  @Query('bedrooms') bedrooms?: number,
) {
  return this.propertiesService.search(
    location,
    type,
    Number(bedrooms),
  );
}
  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }
  
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<CreatePropertyDto>,
  ) {
    return this.propertiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.propertiesService.remove(id);
  }
}