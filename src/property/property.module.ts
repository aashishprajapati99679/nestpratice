import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller.js';
import { PropertyService } from './property.service.js';
import { Property } from '../enities/property.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Property])],
  controllers: [PropertyController],
  providers: [PropertyService],
  exports : [PropertyService]
})
export class PropertyModule {}
