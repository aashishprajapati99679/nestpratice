import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://neondb_owner:npg_EfdRbNMy86uB@ep-billowing-block-b4oq424a-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  autoLoadEntities: true,
  synchronize: true,
};
