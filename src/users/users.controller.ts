import { Body, Controller, Get, Headers, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto.js';
import { whitelist } from 'validator';
import { userHeaderDta } from '../dto/header.dto.js';

@Controller('users')
export class UsersController {
    @Get()
    gettheuse(){
        return "this is a All user"
    }

    @Get(':id')
    getUseryID(@Param('id')id : string):string {
        return `This the user vai ID : ${id} `
    }

    @Post()
    @UsePipes(new ValidationPipe({whitelist : true , forbidNonWhitelisted : true}))
    @HttpCode(301)
    createUsers(@Body() data: CreateUserDto): CreateUserDto {
    return data;
    }
    
    @Post('user')
    @HttpCode(301)
    createUser(@Body(new ValidationPipe({whitelist : true , forbidNonWhitelisted : true})) data: CreateUserDto): CreateUserDto {
    return data;
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Headers() headers: userHeaderDta): userHeaderDta {
        return headers;
    }
}
