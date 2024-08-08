import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../global/entities/global.entities';

@Entity()
export class User extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_login: string;

  @Column()
  user_name: string

  @Column()
  user_password: string

  // @Column()
  // user_category

  // @Column()
  // user_favorite_place

  @Column()
  user_profile: string

  @Column()
  user_level: string;
}
