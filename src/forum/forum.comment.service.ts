import { Injectable } from '@nestjs/common';
import { ForumCommentCreateDto } from './dto/forum.comment.create.dto';
import { ForumCommentUpdateDto } from './dto/forum.comment.update.dto';

@Injectable()
export class ForumCommentService {
  create(createCommentDto: ForumCommentCreateDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: ForumCommentUpdateDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
