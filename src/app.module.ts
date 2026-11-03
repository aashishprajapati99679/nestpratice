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
export const { ObserveModule, ObserveInstrument } = createObserveModule();


@Module({
  // imports: [
  //   ConfigModule.forRoot(),TypeOrmModule.forRootAsync({
  //     imports: [ConfigModule],
  //     useFactory: (configService : ConfigService) =>({
  //       type : 'postgres',
  //       host : configService.get('DB_HOST'), 
  //       port : configService.get('DB_PORT'),
  //       username : configService.get('DB_USERNAME'),
  //       password : configService.get('DB_PASSWORD'),
  //       database : configService.get('DB_DATABASE'),
  //       entities : [User , Profile],
  //       synchronize : true,
  //       autoLoadEntities: true,


  //     }),
  //     inject : [ConfigService]
  //   }), UserModule,
  // ],
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
        entities: [Property , PropertyFeature , User],
        synchronize: true,
      }),
    }),
  ], controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
