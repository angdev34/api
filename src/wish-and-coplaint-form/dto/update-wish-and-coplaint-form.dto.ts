import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWishAndCoplaintFormDto } from './create-wish-and-coplaint-form.dto';

export class UpdateWishAndCoplaintFormDto extends PartialType(
  CreateWishAndCoplaintFormDto,
) {
  @ApiProperty()
  id: number;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  updatedBy: string;
  @ApiProperty()
  DeletedAt: string;
  @ApiProperty()
  DeletedBy: string;
  @ApiProperty()
  category: boolean;
  @ApiProperty()
  status: number;
  @ApiProperty()
  message: string;
}
