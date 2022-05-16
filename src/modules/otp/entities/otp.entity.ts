import { UserEntity } from '@modules/admin/access/users/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'otp' })
export class OtpEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid', generated: 'uuid' })
  id?: string;

  @Column({
    name: 'user_id',
    type: 'uuid',
    nullable: false,
  })
  userId: string;

  @Column({
    name: 'otp',
    type: 'varchar',
    length: '6',
    nullable: false,
  })
  otp: string;

  @Column({
    name: 'expiry_date',
    type: 'timestamp',
    nullable: false,
  })
  expiryDate: Date;

  @Column({
    name: 'verified',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  verified: boolean;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
    default: 'now()',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: false,
    default: 'now()',
  })
  updatedAt: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
