// import type { PostgresConnectionCredentialsOptions } from "typeorm/driver/postgres/PostgresConnectionCredentialsOptions.js";

// export const pgConfig:PostgresConnectionCredentialsOptions = {
//     url: 'postgresql://neondb_owner:npg_7QNkEPUWXT3z@ep-purple-pine-b40uo4sz-pooler.c-6.us-east-2.aws.neon.tech/nestlern?sslmode=require&channel_binding=require',
//     type : 'postgres',
//     port : 3306,
//     entities : ["dist/**/*.entity{.ts,.js}"],
//     synchronize : true,
//     autoLoadEntities: true,
// }

import { DataSourceOptions } from 'typeorm';
import { Property } from '../enities/property.entity.js';

export const pgConfig: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  port: 5432,
  entities: [Property],
  synchronize: true,
  // autoLoadEntities: true,
};