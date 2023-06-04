import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/register-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() loginBody: CreateUserDto) {
      return this.authService.register(loginBody);
    }
    
    @Post('login')
    login(@Body() loginBody: LoginUserDto) {
      return this.authService.login(loginBody);
    }
    

    @Get()
    findAll() {
      return this.authService.findAll();
    }
}
