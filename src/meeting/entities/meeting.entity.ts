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
  user: User;

  @Column({length: 255, nullable: false, name:'meeting_title'})
  meetingTitle: string;

  @Column({length: 255, nullable: false, name:'meeting_content'})
  meetingContent: string;

  @Column({name: 'meeting_people', nullable: false})
  meetingPeople: number;

  @Column({name: 'meeting_current_people', nullable: false, default: 1})
  meetingCurrentPeople: number;

  @Column({default: 0, name: 'meeting_like'})
  meetingLike: number;

  @Column({name: 'departure_day'})
  departureDay: Date;

  @ManyToOne(() => RegionCodes, (regionCodes) => regionCodes.code,
    {onUpdate: 'CASCADE' , lazy: true})
  @JoinColumn({name: 'region_code'})
  regionCode: string;

  @ManyToOne(() => FishCodes, (fishCodes) => fishCodes.code,
    {onUpdate: 'CASCADE' , lazy: true})
  @JoinColumn({name: 'fish_code'})
  fishCode: string;

  @Column({name: 'is_end', default: false})
  isEnd: boolean;

  // end -> true, end -> false
  changeStatus(){
    this.isEnd = !this.isEnd;
  }

  increaseLike(){
    this.meetingLike += 1;
  }
}

export class MeetingBuilder extends Meeting{
  setChat(chat: Chat){this.chat = chat; return this;}
  setUser(user: User){this.user = user; return this;}
  setMeetingTitle(meetingTitle: string){this.meetingTitle = meetingTitle; return this;}
  setMeetingContent(meetingContent: string){this.meetingContent = meetingContent; return this;}
  setMeetingPeople(meetingPeople: number){this.meetingPeople = meetingPeople; return this;}
  setMeetingCurrentPeople(meetingCurrentPeople: number){this.meetingCurrentPeople = meetingCurrentPeople; return this;}
  setDepartureDay(departureDay: Date){this.departureDay = departureDay; return this;}
  setRegionCode(regionCode: string){this.regionCode = regionCode; return this;}
  setFishCode(fishCode: string){this.fishCode = fishCode; return this;}

  build(): Meeting {
    const meeting: Meeting = new Meeting();
    meeting.chat = this.chat;
    meeting.user = this.user;
    meeting.meetingTitle = this.meetingTitle;
    meeting.meetingContent = this.meetingContent;
    meeting.departureDay = this.departureDay;
    meeting.meetingPeople = this.meetingPeople;
    meeting.meetingCurrentPeople = this.meetingCurrentPeople;
    meeting.regionCode = this.regionCode;
    meeting.fishCode = this.fishCode;
    return meeting;
  }
}