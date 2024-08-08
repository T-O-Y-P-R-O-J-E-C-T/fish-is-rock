import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Chat } from '../../chats/entities/chat.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';

@Entity()
export class Message extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  message_id: number;

  @ManyToOne(() => User, (user) => user.user_id)
  @JoinColumn({name: "user_id"})
  user_id: number;

  @ManyToOne(() => Chat, (chat) => chat.chat_id)
  @JoinColumn({name: "chat_id"})
  chat_id: number;

  @Column()
  message_content: string;
}
