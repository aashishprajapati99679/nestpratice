import { Injectable } from '@nestjs/common';

@Injectable()
export class PipsService {
    async findAll() {}
    async findOne(id: string) {}
    async create(data: any) {}
    async update(id: string, data: any) {}
}
