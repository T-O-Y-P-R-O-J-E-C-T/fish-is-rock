import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../global/entities/global.entities';


@Entity()
export class Chat extends BaseTimeEntity{
  @PrimaryGeneratedColumn({name: `chat_id`})
  chatId: number;

  @Column({name: 'chat_name'})
  chatName: string;
}
