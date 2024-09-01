import { Forum, ForumBuilder } from '../entities/forum.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RequestForumDto{
  @ApiProperty({example: 1})
  userId: number;
  @ApiProperty({example: 1})
  forumTitle: string;
  @ApiProperty({example: 1})
  forumContent: string;

  toForum(): Forum{
    return new ForumBuilder()
      .setId(this.userId)
      .setForumTitle(this.forumTitle)
      .setForumContent(this.forumContent)
      .build();
  }
}