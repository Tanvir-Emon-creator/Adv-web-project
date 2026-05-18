import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtTokenService } from '../jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
     private userRepository: Repository<User>,
     private jwtService: JwtTokenService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.userRepository.save(user);
    

    return {
      message: 'User registered successfully',
    };
  }

  async login(loginDto: LoginDto) {
  const { email, password } = loginDto;

  const user = await this.userRepository.findOne({
    where: { email },
  });

  if (!user) {
    throw new BadRequestException('Invalid email');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new BadRequestException('Invalid password');
  }

 return {
  message: 'Login successful',
  token: this.jwtService.generateToken(user),
};
}
}