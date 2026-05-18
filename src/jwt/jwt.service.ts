import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
  constructor(private jwtService: JwtService) {}

  generateToken(user: any) {
    return this.jwtService.sign({
      id: user.id,
      email: user.email,
    });
  }
}