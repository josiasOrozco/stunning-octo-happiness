import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcryptjs';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false, default: false })
  name: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 255,
    nullable: false,
    default: false,
  })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  email: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
    select: false,
    default: false,
  })
  password: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  createdAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
