import { Injectable } from '@nestjs/common';
import type { Repository } from 'typeorm/browser/repository/Repository.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../enities/property.entity.js';
import type { PaginationDto } from './dto/pagination.dto.js';
import { DEFAULT_PAGINATION_LIMIT } from '../utils/constants.js';

@Injectable()
export class PropertyService {
    constructor(@InjectRepository(Property) private propertyRepository: Repository<Property>) {}
    async getAllProperties(paginationDto: PaginationDto): Promise<Property[]>{
        const properties = await this.propertyRepository.find({skip: paginationDto.skip, take : paginationDto.limit ?? DEFAULT_PAGINATION_LIMIT });
        return properties;
    }
}
