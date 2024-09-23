import { PartialType } from '@nestjs/mapped-types';
import { ForumCommentCreateDto } from './forum.comment.create.dto';

export class ForumCommentUpdateDto extends PartialType(ForumCommentCreateDto) {}
