import { ResponsePublicUser } from '../../user/dto/response.public.user.dto';

export class ResponseForumDto {
  forumId: number;
  forumTitle: string;
  forumContent: string;
  forumLike: number;
  lastModifiedAt: Date;
  user: ResponsePublicUser;
}
