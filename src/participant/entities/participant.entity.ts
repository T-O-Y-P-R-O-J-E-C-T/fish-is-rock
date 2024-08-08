import { Entity, ManyToOne, PrimaryColumn, Unique } from 'typeorm';
import { Chat } from '../../chats/entities/chat.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Participant {
  @PrimaryColumn()
  @ManyToOne(() => Chat,
      chat => chat.chat_id)
  chat_id: number;

  @PrimaryColumn()
  @ManyToOne(() => User,
    user => user.user_id)
  user_id: number;
}
