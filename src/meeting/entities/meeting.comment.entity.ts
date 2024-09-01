import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../global/entities/global.entities';
import { Meeting } from './meeting.entity';

@Entity({name: 'meeting_comment'})
export class MeetingComment extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Meeting, meeting => meeting.id)
  @JoinColumn({name: "user_id"})
  user_id: number;

  @ManyToOne(() => MeetingComment, (comment) => comment.id,{nullable: true})
  @JoinColumn({name: "comment_parent"})
  comment_parent: MeetingComment;

  @OneToMany(() => MeetingComment, (comment) => comment.comment_parent)
  @JoinColumn({name: "comment_reply"})
  comment_reply: MeetingComment[];
}
