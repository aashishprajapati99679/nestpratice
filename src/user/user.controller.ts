import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get('getAllUsers')
    async getAllUsers(){
       const users = await this.userService.getAllUsers();
       return { message : 'Users fetched successfully' , users : users}; 
    }

    @Get('getUserById/:id')
    async getUserById(@Param('id') id : number){
        const user = await this.userService.getUserById(id);
        if(user){
            return { message : 'User fetched successfully' , user : user};
        } else {
            return { message : 'User not found' };
        }
    }

     @Put('update/:id')
     async updateUser(@Param('id') id: number, @Body() updateData: CreateUserDto,) {
       return await this.userService.updateUser(Number(id),updateData);
    }

    @Delete('delete/:id')
    async deleteUser(@Param('id') id : number){
        return await this.userService.deleteUser(id);
    }
}

