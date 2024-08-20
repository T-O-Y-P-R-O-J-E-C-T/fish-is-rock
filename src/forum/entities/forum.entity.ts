import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Forum {
  @PrimaryGeneratedColumn({name: 'forum_id'})
  forumId: number;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({name: "user_id"})
  userId: number;

  @Column({name: 'forum_title'})
  forumTitle: string;

  @Column({name: 'forum_content'})
  forumContent: string;

  @Column({name: 'forum_like'})
  forumLike: number;

}
