import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingCommentService } from './meeting.comment.service';


@Controller('comment')
export class MeetingCommentController {
  constructor(private readonly commentService: MeetingCommentService) {}

  // @Post()
  // create(@Body() createCommentDto: CreateCommentDto) {
  //   return this.commentService.create(createCommentDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.commentService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commentService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
  //   return this.commentService.update(+id, updateCommentDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commentService.remove(+id);
  // }
}
