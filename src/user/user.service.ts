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

    async getAllUsers(): Promise<any[]>{
        return await this.userRepository.find();
    }

    async getUserById(id : number): Promise<User | null>{
        const user = await this.userRepository.findOneBy({id});
        return user ? user : null;
    }

    async updateUser(id : number, updateData : CreateUserDto): Promise<any>{
        const existUser = await this.userRepository.findOneBy({id});
        if(!existUser){
            return { message : "User Not Found!!"}
        }
        await this.userRepository.update(id , updateData)
        return {message : "User Updated"}
    }
    
    async deleteUser(id : number): Promise<any>{
        const existUser = await this.userRepository.findOneBy({id});
        if(!existUser){
            return { message : "User Not Found!!"}
        }
        await this.userRepository.delete(id);
        return { message : "User Deleted"}
    }
}
