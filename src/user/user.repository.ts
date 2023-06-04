import {  Repository } from 'typeorm';
import { User } from './entities/user.entity';



export class UserRepository extends Repository<User> {
  // Métodos personalizados del repositorio, si los tienes
}