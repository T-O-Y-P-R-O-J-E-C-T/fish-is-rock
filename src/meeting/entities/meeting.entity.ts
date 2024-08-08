import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Chat } from '../../chats/entities/chat.entity';
import { User } from '../../user/entities/user.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';

@Entity()
export class Meeting extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  meeting_id: number;

  @ManyToOne(() => Chat, { onDelete: 'CASCADE' })
  @JoinColumn({name: "chat_id"})
  chat: Chat;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({name: "user_id"})
  user_id: number;

  @Column({length: 255, nullable: false, default: 0})
  message_content: string;
}
