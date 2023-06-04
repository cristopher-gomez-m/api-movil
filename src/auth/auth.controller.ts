import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: AuthService) {}
    @Get()
    findAll() {
      return this.userService.findAll();
    }
}
