import { Entity, ManyToOne, PrimaryColumn, Unique } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Chat } from '../../chat/entities/chat.entity';

@Entity()
export class Participant {
  @PrimaryColumn({name: 'chat_id'})
  @ManyToOne(() => Chat,
      chat => chat.chatId)
  chatId: number;

  @PrimaryColumn({name: 'user_id'})
  @ManyToOne(() => User,
    user => user.id)
  userId: number;
}
