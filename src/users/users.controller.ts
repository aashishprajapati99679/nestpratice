import { Body, Controller, Get, Headers, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto.js';
import { whitelist } from 'validator';
import { userHeaderDta } from '../dto/header.dto.js';
import { PipsService } from '../users/pips/pips.service.js';

// this comment for git huv
@Controller('users')
export class UsersController {

    constructor( private pipsService : PipsService){ }

    //this to get request
    @Get('all')
    findAllUser(){
       return this.pipsService.findAll();
    }

    @Get(':id')
    findOneUser(@Param('id') id : string){
        return this.pipsService.findOne(id);
    }

    @Post('create')
    createUser(@Body() data : CreateUserDto) : Promise<void> {
        return this.pipsService.create(data);
    }

    @Patch(':id')
    updateUser(@Param('id') id : string , @Body() data : CreateUserDto) :  Promise<void> {
        return this.pipsService.update(id , data);
    }

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
    createUser34568(@Body(new ValidationPipe({whitelist : true , forbidNonWhitelisted : true})) data: CreateUserDto): CreateUserDto {
    return data;
    }

    @Patch(':id')
    updateUser234567(@Param('id') id: string, @Headers() headers: userHeaderDta): userHeaderDta {
        return headers;
    }
}
