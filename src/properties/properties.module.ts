import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property.entity';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [JwtModule.register({
  secret: process.env.JWT_SECRET,
}),TypeOrmModule.forFeature([Property])],
  providers: [PropertiesService],
  controllers: [PropertiesController],
})
export class PropertiesModule {}