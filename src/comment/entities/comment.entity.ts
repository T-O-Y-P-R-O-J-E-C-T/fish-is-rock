import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';

@Entity()
export class Comment extends BaseTimeEntity{
  @PrimaryGeneratedColumn()
  comment_id: number;

  @ManyToOne(type => User, user => user.userId)
  @JoinColumn({name: "user_id"})
  user_id: number;

  @ManyToOne(() => Comment,
    (comment) => comment.comment_id
    ,{nullable: true})
  @JoinColumn({name: "comment_parent"})
  comment_parent: Comment;

  @OneToMany(() => Comment, (comment) => comment.comment_parent)
  @JoinColumn({name: "comment_reply"})
  comment_reply: Comment[];
}
