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
import { JwtGuard } from '../auth/jwt/jwt.guard';

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

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<CreatePropertyDto>,
  ) {
    return this.propertiesService.update(id, data);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.propertiesService.remove(id);
  }
}