import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Chat } from '../../chats/entities/chat.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';

@Entity()
export class Message extends BaseTimeEntity{
  @PrimaryGeneratedColumn({name:'message_id'})
  messageId: number;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({name: "user_id"})
  userId: number;

  @ManyToOne(() => Chat, (chat) => chat.chatId)
  @JoinColumn({name: "chat_id"})
  chatId: number;

  @Column({name:'message_content'})
  messageContent: string;
}
