import { Entity, ManyToOne, PrimaryColumn, Unique } from 'typeorm';
import { Chat } from '../../chats/entities/chat.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Participant {
  @PrimaryColumn({name: 'chat_id'})
  @ManyToOne(() => Chat,
      chat => chat.chatId)
  chatId: number;

  @PrimaryColumn({name: 'user_id'})
  @ManyToOne(() => User,
    user => user.userId)
  userId: number;
}
