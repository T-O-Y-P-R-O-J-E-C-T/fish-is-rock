import { ResponsePublicUser } from '../../user/dto/response.public.user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Forum } from '../entities/forum.entity';
import { User } from '../../user/entities/user.entity';

export class ForumResponseDto {
  @ApiProperty({example: 1})
  id: number;
  @ApiProperty({example: 'my name is lorem'})
  forumTitle: string;
  @ApiProperty({example: 'forum lorem ipsum'})
  forumContent: string;
  @ApiProperty({example: 3})
  forumLike: number;
  @ApiProperty({example: 2024-12-21})
  lastModifiedAt: Date;
  @ApiProperty()
  user: ResponsePublicUser;

  toDto(forum: Forum): ForumResponseDto{
    return new ResponseForumDtoBuilder()
      .setId(forum.id)
      .setForumTitle(forum.forumTitle)
      .setForumContent(forum.forumContent)
      .setForumLike(forum.forumLike)
      .setLastModifiedAt(forum.updated_at)
      .setUser(forum.user)
      .build();
  }
}

export class ResponseForumDtoBuilder extends ForumResponseDto{
  setId(id: number){this.id = id; return this;}
  setForumTitle(forumTitle: string){this.forumTitle=forumTitle; return this;};
  setForumContent(forumContent: string){this.forumContent=forumContent; return this;};
  setForumLike(forumLike: number){this.forumLike=forumLike; return this;};
  setLastModifiedAt(forumModifiedAt: Date){this.lastModifiedAt=forumModifiedAt; return this;};
  setUser(user: User){this.user = new ResponsePublicUser().toDto(user); return this;}

  build(): ForumResponseDto{
    const dto = new ForumResponseDto();
    dto.id = this.id;
    dto.forumTitle = this.forumTitle;
    dto.forumContent = this.forumContent;
    dto.forumLike = this.forumLike;
    dto.lastModifiedAt = this.lastModifiedAt;
    dto.user = this.user;
    return dto;
  }
}
