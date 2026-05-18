import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { JwtTokenModule } from '../jwt/jwt.module';

@Module({
  imports: [JwtTokenModule,TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AuthModule {}