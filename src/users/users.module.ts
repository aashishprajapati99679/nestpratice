// import { Module } from '@nestjs/common';
// import { UsersController } from './users.controller.js';
// import { UsersService } from './users.service.js';

// @Module({
//     controllers: [UsersController],
//     providers:[UsersService, ]
// })

// export class UsersModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // CREATE USER
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // GET ALL USERS
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // GET USER BY ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  // UPDATE USER
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(Number(id), updateUserDto);
  }

  // DELETE USER
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}