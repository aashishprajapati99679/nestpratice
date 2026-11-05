// import type { PostgresConnectionCredentialsOptions } from "typeorm/driver/postgres/PostgresConnectionCredentialsOptions.js";

// export const pgConfig:PostgresConnectionCredentialsOptions = {
//     url: 'postgresql://neondb_owner:npg_7QNkEPUWXT3z@ep-purple-pine-b40uo4sz-pooler.c-6.us-east-2.aws.neon.tech/nestlern?sslmode=require&channel_binding=require',
//     type : 'postgres',
//     port : 3306,
//     entities : ["dist/**/*.entity{.ts,.js}"],
//     synchronize : true,
//     autoLoadEntities: true,
// }
import "dotenv/config";
import { DataSourceOptions } from 'typeorm';
import { Property } from '../enities/property.entity.js';
import { PropertyFeature } from "../enities/propertyFeature.entity.js";
import { User } from "../enities/user.entity.js";
import { PropertyType } from "../enities/propertyType.entity.js";
console.log('DB URL loaded:', !!process.env.DB_URL);
export const pgConfig: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    entities: [Property , PropertyFeature , User , PropertyType],
    synchronize: false,
};