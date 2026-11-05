import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { pgConfig } from './config/dbConfig.js';
import { Property } from './enities/property.entity.js';
import { User } from './enities/user.entity.js';
import { PropertyFeature } from './enities/propertyFeature.entity.js';
import { PropertyType } from './enities/propertyType.entity.js';
import { PropertyModule } from './property/property.module.js';
import { UserModule } from './user/user.module.js';
export const { ObserveModule, ObserveInstrument } = createObserveModule();


@Module({

   imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB_URL'),
        entities: [Property , PropertyFeature , User , PropertyType],
        synchronize: true,
      }),
    }),

    PropertyModule,

    UserModule,
  ], controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
