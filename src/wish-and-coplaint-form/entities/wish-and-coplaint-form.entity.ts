import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WishAndCoplaintCategory } from './wish-and-complaint-category.entity';
import { WishAndCoplaintStatus } from './wish-and-complaint-status.entity';

@Entity({ name: 'wish_and_complaint_form' })
export class WishAndCoplaintForm {
  // @PrimaryColumn({ type: 'integer', nullable: false,  })
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  createdBy: string;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: true })
  updatedBy: string;
  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  deletedAt: string;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: true })
  deletedBy: string;

  @ApiProperty()
  @OneToOne(() => WishAndCoplaintCategory)
  @JoinColumn()
  Category: WishAndCoplaintCategory;

  @ApiProperty()
  @OneToOne(() => WishAndCoplaintStatus)
  @JoinColumn()
  Status: WishAndCoplaintStatus;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  message: string;
}

/* 
export enum WCCategory {
  Wish = 0,
  Complaint = 1,
}
export enum WCStatus {
  Active = 0,
  Solved = 1,
  Deleted = 2,
} */
