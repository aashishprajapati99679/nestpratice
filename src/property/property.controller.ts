import { Controller, Get, Query } from '@nestjs/common';
import { PropertyService } from './property.service.js';
import type { PaginationDto } from './dto/pagination.dto.js';

@Controller('property')
export class PropertyController {

    constructor(private propertyService: PropertyService) {}

    @Get('allproperties')
    async getAllProperties(@Query() paginationDto : PaginationDto) {
        const properties = await this.propertyService.getAllProperties(paginationDto);
        if(properties.length === 0){
            return {message : 'No properties found'};
        }
        return properties;
    }
}
