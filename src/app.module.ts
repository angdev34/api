import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishAndCoplaintCategory } from './wish-and-coplaint-form/entities/wish-and-complaint-category.entity';
import { WishAndCoplaintStatus } from './wish-and-coplaint-form/entities/wish-and-complaint-status.entity';
import { WishAndCoplaintForm } from './wish-and-coplaint-form/entities/wish-and-coplaint-form.entity';
import { WishAndCoplaintFormModule } from './wish-and-coplaint-form/wish-and-coplaint-form.module';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
    TypeOrmModule.forRoot({
      entities: [
        WishAndCoplaintCategory,
        WishAndCoplaintStatus,
        WishAndCoplaintForm,
      ],
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'WACF',
      password: 'Z1x2c3v4b5',
      database: 'WACF',
      logging: true,
      //autoLoadEntities: true,
      synchronize: true,
      //  entities: ['dist/**/*.entity{ .ts,.js}'],
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      /*  ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      }, */
    }),
    /*  type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'WACF',
      password: 'Z1x2c3v4b5',
      database: 'WACF',
      logging: true,
      //autoLoadEntities: true,
      synchronize: true,
      entities: [
        WishAndCoplaintForm,
        WishAndCoplaintCategory,
        WishAndCoplaintStatus,
      ],
       ssl: true,
       extra: {
         ssl: {
           rejectUnauthorized: false,
         },
       }, */
    WishAndCoplaintFormModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
