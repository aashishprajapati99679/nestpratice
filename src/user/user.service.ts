import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import  { User } from './entity/user.entity.js';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createuser.dto.js';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async createUser(createUserDto : CreateUserDto): Promise<User>{
        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);
    }
}
