import { Forum, ForumBuilder } from '../entities/forum.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RequestForumDto{
  @ApiProperty({example: 1})
  id: number;
  @ApiProperty({example: 'john doe title'})
  forumTitle: string;
  @ApiProperty({example: 'john doe description'})
  forumContent: string;

  toForum(): Forum{
    return new ForumBuilder()
      .setId(this.id)
      .setForumTitle(this.forumTitle)
      .setForumContent(this.forumContent)
      .build();
  }
}