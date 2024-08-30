import { Forum, ForumBuilder } from '../entities/forum.entity';

export class RequestForumDto{
  userId: number;
  forumTitle: string;
  forumContent: string;

  toForum(): Forum{
    return new ForumBuilder()
      .setUserId(this.userId)
      .setForumTitle(this.forumTitle)
      .setForumContent(this.forumContent)
      .build();
  }
}