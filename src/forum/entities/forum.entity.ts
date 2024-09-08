import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { BaseTimeEntity } from '../../global/entities/global.entities';
import { ForumResponseDto, ResponseForumDtoBuilder } from '../dto/forum.response.dto';
import { CategoryCodes } from '../../global/entities/global.code.entity';

@Entity()
export class Forum extends BaseTimeEntity{
  @PrimaryGeneratedColumn({name: 'forum_id'})
  id: number;

  @ManyToOne(() => User, (user) => user.forums, {eager: true, nullable: false})
  @JoinColumn({name: "user_id"})
  user: User;

  @Column({name: 'forum_title'})
  forumTitle: string;

  @Column({name: 'forum_content'})
  forumContent: string;

  @Column({name: 'forum_like', default: 0})
  forumLike: number;

  @Column({name: 'views', default: 0})
  views: number;

  @OneToOne(() => CategoryCodes, categoryCodes => categoryCodes.code)
  @JoinColumn({name: 'category_code'})
  categoryCode: string;

  toResponseForumDto(forum: Forum): ForumResponseDto {
    return new ResponseForumDtoBuilder()
      .setId(this.id)
      .setForumTitle(this.forumTitle)
      .setForumContent(this.forumContent)
      .setForumLike(this.forumLike)
      .build();
  }
}

export class ForumBuilder extends Forum{
  setId(id: number){this.id = id; return this;}
  setUser(user: User){this.user = user; return this;};
  setForumTitle(forumTitle: string){this.forumTitle=forumTitle; return this;};
  setForumContent(forumContent: string){this.forumContent=forumContent; return this;};
  setForumLike(forumLike: number){this.forumLike=forumLike; return this;};
  setCategoryCode(categoryCode: string){this.categoryCode=categoryCode; return this;};

  build(): Forum{
    const forum = new Forum();
    forum.id = this.id;
    forum.user = this.user;
    forum.forumTitle = this.forumTitle;
    forum.forumContent = this.forumContent;
    forum.forumLike = this.forumLike;
    forum.categoryCode = this.categoryCode;
    forum.views = this.views;
    return forum;
  }
}
