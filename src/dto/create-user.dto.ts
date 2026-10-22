import { IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name : string;
    @IsString()
    email : string;
    @IsNumber( {} ,{ message : "It should ve numer : password" })
    password : number;
}
