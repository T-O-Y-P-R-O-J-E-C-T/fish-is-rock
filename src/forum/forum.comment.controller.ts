import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForumCommentService } from './forum.comment.service';
import { ForumCommentCreateDto } from './dto/forum.comment.create.dto';
import { ForumCommentUpdateDto } from './dto/forum.comment.update.dto';

@Controller('comment')
export class ForumCommentController {
  constructor(private readonly commentService: ForumCommentService) {}

  @Post()
  create(@Body() createCommentDto: ForumCommentCreateDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: ForumCommentUpdateDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
