import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { WishAndCoplaintFormService } from './wish-and-coplaint-form.service';
import { CreateWishAndCoplaintFormDto } from './dto/create-wish-and-coplaint-form.dto';
import { UpdateWishAndCoplaintFormDto } from './dto/update-wish-and-coplaint-form.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WishAndCoplaintForm } from './entities/wish-and-coplaint-form.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
@ApiBearerAuth()
@ApiTags('wish-and-complaint')
@Controller('wish-and-coplaint-form')
export class WishAndCoplaintFormController {
  constructor(
    private readonly wishAndCoplaintFormService: WishAndCoplaintFormService,
  ) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  create(@Body() createWishAndCoplaintFormDto: CreateWishAndCoplaintFormDto) {
    return this.wishAndCoplaintFormService.create(createWishAndCoplaintFormDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Pagination<WishAndCoplaintForm>> {
    limit = limit > 100 ? 100 : limit;
    return this.wishAndCoplaintFormService.findAll({
      page,
      limit,
    });
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  async findOne(@Param('id') id: number) {
    if (!id) throw new HttpException('undefined id', HttpStatus.BAD_REQUEST);
    const result = await Promise.resolve(
      this.wishAndCoplaintFormService.findOne(id),
    );
    if (!result)
      throw new HttpException(
        `Could not find record with id=${id}`,
        HttpStatus.NOT_FOUND,
      );
    return result;
  }
  @Post('filter')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  filter(
    @Body() wishAndCoplaintForm: WishAndCoplaintForm,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.wishAndCoplaintFormService.filter(
      wishAndCoplaintForm.id,
      wishAndCoplaintForm.createdAt,
      wishAndCoplaintForm.createdBy,
      wishAndCoplaintForm.updatedAt,
      wishAndCoplaintForm.updatedBy,
      wishAndCoplaintForm.deletedAt,
      wishAndCoplaintForm.deletedBy,
      wishAndCoplaintForm.Category,
      wishAndCoplaintForm.Status,
      wishAndCoplaintForm.message,
      {
        page,
        limit,
      },
    );
  }
  @Post(':id')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  update(
    @Param('id') id: number,
    @Body() updateWishAndCoplaintFormDto: UpdateWishAndCoplaintFormDto,
  ) {
    if (id === undefined || updateWishAndCoplaintFormDto === undefined)
      throw new HttpException(
        'id or form body is undefined',
        HttpStatus.BAD_REQUEST,
      );
    return this.wishAndCoplaintFormService.update(
      id,
      updateWishAndCoplaintFormDto,
    );
  }

  @Get(':id')
  remove(@Param('id') id: number) {
    return this.wishAndCoplaintFormService.remove(id);
  }

  /*   @Get('filter')
  @ApiQuery({
    name: 'id',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'responsibleName',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'customerName',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'quantity',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'orderNo',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'backType',
    type: 'BackType',
    required: false,
  })
  @ApiQuery({
    name: 'product',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'requestDate',
    type: Date,
    required: false,
  })
  @ApiQuery({
    name: 'status',
    type: 'BackOrderState',
    required: false,
  })

  @ApiResponse({
    status: 200,
    description: 'Success',
  })

  filter(@Query('id') id?: number, @Query('responsibleName') responsibleName?: string,
    @Query('customerName') customerName?: string, @Query('quantity') quantity?: number,
    @Query('orderNo') orderNo?: string, @Query('backType') backType?: BackType,
    @Query('product') product?: string, @Query('requestDate') requestDate?: Date,
    @Query('status') status?: BackOrderState,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10
  ): Promise<Pagination<BackOrder>> {
    limit = limit > 100 ? 100 : limit;
    return this.backOrderService.filter({
      page,
      limit,
    }, id, responsibleName, customerName, quantity, orderNo,
      backType, product, requestDate, status);
  } */
}
