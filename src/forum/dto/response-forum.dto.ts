import { ResponsePublicUser } from '../../user/dto/response.public.user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Forum } from '../entities/forum.entity';

export class ResponseForumDto {
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

  toDto(forum: Forum): ResponseForumDto{
    return new ResponseForumDtoBuilder()
      .setId(forum.id)
      .setForumTitle(forum.forumTitle)
      .setForumContent(forum.forumContent)
      .setForumLike(forum.forumLike)
      .setLastModifiedAt(forum.updated_at)
      .build();
  }
}

export class ResponseForumDtoBuilder extends ResponseForumDto{
  setId(id: number){this.id = id; return this;}
  setForumTitle(forumTitle: string){this.forumTitle=forumTitle; return this;};
  setForumContent(forumContent: string){this.forumContent=forumContent; return this;};
  setForumLike(forumLike: number){this.forumLike=forumLike; return this;};
  setLastModifiedAt(forumModifiedAt: Date){this.lastModifiedAt=forumModifiedAt; return this;};

  build(): ResponseForumDto{
    const dto = new ResponseForumDto();
    dto.id = this.id;
    dto.forumTitle = this.forumTitle;
    dto.forumContent = this.forumContent;
    dto.forumLike = this.forumLike;
    dto.lastModifiedAt = this.lastModifiedAt;
    return dto;
  }
}
