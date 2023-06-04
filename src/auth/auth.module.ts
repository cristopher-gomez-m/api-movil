import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository]),UserModule],
  controllers: [AuthController],
  providers: [AuthService,UserService]
})
export class AuthModule {}
