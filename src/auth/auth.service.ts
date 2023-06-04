import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
//import { LoginAuthDto } from './dto/login-auth.dto';
import { hash } from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/register-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService:UserService
    ){}
    async register(registerBody: CreateUserDto){
        const {password} = registerBody;
        const plainToHash= await hash(password,10);
        registerBody={...registerBody,password:plainToHash};
        return this.userService.create(registerBody);
    }
    //login(loginBody: LoginAuthDto){}

    findAll() {
        return this.userService.findAll();
      }
}
