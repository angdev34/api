import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWishAndCoplaintFormDto } from './dto/create-wish-and-coplaint-form.dto';
import { UpdateWishAndCoplaintFormDto } from './dto/update-wish-and-coplaint-form.dto';
import { WishAndCoplaintForm } from './entities/wish-and-coplaint-form.entity';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { WishAndCoplaintCategory } from './entities/wish-and-complaint-category.entity';
import { WishAndCoplaintStatus } from './entities/wish-and-complaint-status.entity';

@Injectable()
export class WishAndCoplaintFormService {
  async filter(
    id?: number,
    createdAt?: Date,
    createdBy?: string,
    updatedAt?: Date,
    updatedBy?: string,
    deletedAt?: string,
    deletedBy?: string,
    category?: WishAndCoplaintCategory,
    status?: WishAndCoplaintStatus,
    message?: string,
    options?: IPaginationOptions,
  ) {
    return await paginate<WishAndCoplaintForm>(
      this.wishAndCoplaintFormRepository,
      options,
      {
        where: {
          id: id,
          createdAt: createdAt,
          createdBy: createdBy,
          updatedAt: updatedAt,
          updatedBy: updatedBy,
          deletedAt: deletedAt,
          deletedBy: deletedBy,
          Category: category,
          Status: status,
          message: message,
        },
      },
    );
  }
  constructor(
    @InjectRepository(WishAndCoplaintForm)
    private readonly wishAndCoplaintFormRepository: Repository<WishAndCoplaintForm>,
  ) {}
  create(createWishAndCoplaintFormDto: CreateWishAndCoplaintFormDto) {
    return this.wishAndCoplaintFormRepository.save(
      createWishAndCoplaintFormDto,
    );
  }

  async findAll(
    options: IPaginationOptions,
  ): Promise<Pagination<WishAndCoplaintForm>> {
    return await paginate<WishAndCoplaintForm>(
      this.wishAndCoplaintFormRepository,
      options,
    );
  }

  async findOne(id: number): Promise<WishAndCoplaintForm> {
    if (!id) throw new Error(`id cannot be null`);
    return await Promise.resolve(
      this.wishAndCoplaintFormRepository.findOne({
        where: { id: id },
      }),
    );
  }

  update(
    id: number,
    updateWishAndCoplaintFormDto: UpdateWishAndCoplaintFormDto,
  ) {
    updateWishAndCoplaintFormDto.updatedAt = new Date();
    return this.wishAndCoplaintFormRepository.update(
      id,
      updateWishAndCoplaintFormDto,
    );
  }

  remove(id: number) {
    return this.wishAndCoplaintFormRepository.delete({ id: id });
  }
}
