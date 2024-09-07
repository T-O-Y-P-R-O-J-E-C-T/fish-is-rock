import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';
import { FishCodes, RegionCodes } from '../../global/entities/global.code.entity';
import { Chat } from '../../chat/entities/chat.entity';

@Entity()
export class Meeting extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chat, { onDelete: 'CASCADE' , lazy: true})
  @JoinColumn({name: "chat_id"})
  chat: Chat;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({name: "user_id"})
  userId: number;

  @Column({length: 255, nullable: false, default: 0, name:'meeting_content'})
  meetingContent: string;

  @Column({default: 0, name: 'meeting_like'})
  meetingLike: number;

  @Column({name: 'departure_day'})
  departureDay: Date;

  @ManyToOne(() => RegionCodes, (regionCodes) => regionCodes.code)
  @JoinColumn({name: 'region_code'})
  regionCode: string;

  @ManyToOne(() => FishCodes, (fishCodes) => fishCodes.code)
  @JoinColumn({name: 'fish_code'})
  fishCode: string;

  @Column({name: 'is_end'})
  isEnd: boolean;
}
