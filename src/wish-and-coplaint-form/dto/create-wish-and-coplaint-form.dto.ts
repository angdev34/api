import { ApiProperty } from '@nestjs/swagger';

export class CreateWishAndCoplaintFormDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  category: boolean;
  @ApiProperty()
  status: number;
  @ApiProperty()
  message: string;
}
