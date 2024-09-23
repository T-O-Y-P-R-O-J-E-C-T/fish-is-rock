import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../global/entities/global.entities';
import { Forum } from './forum.entity';


@Entity({name: 'forum_comment'})
export class ForumComment extends BaseTimeEntity{
  @PrimaryGeneratedColumn({name: 'id'})
  id: number;

  @ManyToOne(type => Forum, forum => forum.id)
  @JoinColumn({name: "user_id"})
  user_id: number;

  @ManyToOne(() => ForumComment, (comment) => comment.id,{nullable: true})
  @JoinColumn({name: "comment_parent"})
  comment_parent: ForumComment;

  @OneToMany(() => ForumComment, (comment) => comment.comment_parent)
  @JoinColumn({name: "comment_reply"})
  comment_reply: ForumComment[];
}
