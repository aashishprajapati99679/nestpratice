import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/createuser.dto.js';

@Controller('user')
export class UserController {
    constructor( private readonly userService : UserService) {}

    @Post('createUser')
    async createUser(@Body() createUserDto : CreateUserDto){
        await this.userService.createUser(createUserDto);
        return { message : 'User created successfully' };
    }

}

