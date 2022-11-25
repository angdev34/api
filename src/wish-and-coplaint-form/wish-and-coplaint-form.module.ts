import { Module } from '@nestjs/common';
import { WishAndCoplaintFormService } from './wish-and-coplaint-form.service';
import { WishAndCoplaintFormController } from './wish-and-coplaint-form.controller';
import { WishAndCoplaintCategory } from './entities/wish-and-complaint-category.entity';
import { WishAndCoplaintStatus } from './entities/wish-and-complaint-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishAndCoplaintForm } from './entities/wish-and-coplaint-form.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WishAndCoplaintForm]),
    TypeOrmModule.forFeature([WishAndCoplaintCategory]),
    TypeOrmModule.forFeature([WishAndCoplaintStatus]),
    WishAndCoplaintCategory,
    WishAndCoplaintStatus,
  ],
  exports: [TypeOrmModule],
  controllers: [WishAndCoplaintFormController],
  providers: [WishAndCoplaintFormService],
})
export class WishAndCoplaintFormModule {}
