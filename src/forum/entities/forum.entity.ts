import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';
import { ResponseForumDto, ResponseForumDtoBuilder } from '../dto/response-forum.dto';

@Entity()
export class Forum extends BaseTimeEntity{
  @PrimaryGeneratedColumn({name: 'forum_id'})
  forumId: number;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({name: "user_id"})
  userId: number;

  @Column({name: 'forum_title'})
  forumTitle: string;

  @Column({name: 'forum_content'})
  forumContent: string;

  @Column({name: 'forum_like', default: 0})
  forumLike: number;

  toResponseForumDto(forum: Forum): ResponseForumDto {
    return new ResponseForumDtoBuilder()
      .setForumId(this.forumId)
      .setForumTitle(this.forumTitle)
      .setForumContent(this.forumContent)
      .setForumLike(this.forumLike)
      .build();
}
}

export class ForumBuilder extends Forum{
  setForumId(forumId: number){this.forumId = forumId; return this;}
  setUserId(userId: number){this.userId = userId; return this;};
  setForumTitle(forumTitle: string){this.forumTitle=forumTitle; return this;};
  setForumContent(forumContent: string){this.forumContent=forumContent; return this;};
  setForumLike(forumLike: number){this.forumLike=forumLike; return this;};

  build(): Forum{
    const forum = new Forum();
    forum.forumId = this.forumId;
    forum.userId = this.userId;
    forum.forumTitle = this.forumTitle;
    forum.forumContent = this.forumContent;
    forum.forumLike = this.forumLike;
    return forum;
  }
}
