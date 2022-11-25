/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'wish_and_complaint_category' })
export class WishAndCoplaintCategory {
  @ApiProperty()
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  name: string;
}
