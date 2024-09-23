import { Forum, ForumBuilder } from '../entities/forum.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ForumRequestDto {
  @ApiProperty({example: 1, description: '유저의 ID'},)
  id: number;
  @ApiProperty({example: 'john doe title'})
  forumTitle: string;
  @ApiProperty({example: 'john doe description'})
  forumContent: string;
  @ApiProperty({example: '루어낚시'})
  forumCategory: string;


  toForum(): Forum{
    return new ForumBuilder()
      .setId(this.id)
      .setForumTitle(this.forumTitle)
      .setForumContent(this.forumContent)
      .setCategoryCode(this.forumCategory)
      .build();
  }
}