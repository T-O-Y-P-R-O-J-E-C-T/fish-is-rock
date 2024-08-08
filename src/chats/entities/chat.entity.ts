import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../global/entities/global.entities';


@Entity()
export class Chat extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  chat_id: number;

  @Column()
  chat_name: string;
}
