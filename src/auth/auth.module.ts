import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { JwtTokenModule } from '../jwt/jwt.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
  secret: process.env.JWT_SECRET,
}),JwtTokenModule,TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AuthModule {}