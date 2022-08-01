import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard, JwtAuthGuard } from './guards';
import { User } from '../common/decorators';
import { User as UserEntity } from 'src/user/entities';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@User() user: UserEntity) {
    const data = this.authService.login(user);
    return {
      message: 'Login successfully',
      data
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile() {
    return 'estos son tus datos';
  }
}
