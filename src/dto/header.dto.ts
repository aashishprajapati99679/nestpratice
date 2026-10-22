import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class userHeaderDta {
    @IsString()
    @Expose({ name: 'access-token' })
    accessToken: string;
}