import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// arg : prefix l'url, ex : /auth/methods
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login() {
    this.authService.login();
  }
  @Post('signup')
  signUp() {
    this.authService.signUp();
  }
}
