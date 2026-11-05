import {  IsOptional, IsPositive, IsNumber } from "class-validator";

export class PaginationDto {
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    skip : number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit : number;
}