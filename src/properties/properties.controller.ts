import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { JwtGuard } from '../common/guards/jwt.guard';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get('search')
  search(
    @Query('location') location?: string,
    @Query('type') type?: string,
    @Query('bedrooms') bedrooms?: string,
  ) {
    return this.propertiesService.search(
      location,
      type,
      bedrooms ? Number(bedrooms) : undefined,
    );
  }

  @Get()
findAll(
  @Query('page') page: string,
  @Query('limit') limit: string,
) {
  return this.propertiesService.findAll(
    Number(page) || 1,
    Number(limit) || 5,
  );
}

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<CreatePropertyDto>,
  ) {
    return this.propertiesService.update(Number(id), data);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(Number(id));
  }
}