import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
})
export class PropertiesModule {}