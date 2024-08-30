import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ForumService } from './forum.service';
import { RequestForumDto } from './dto/request-forum.dto';

@Controller('/api/forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post()
  create(@Body() dto: RequestForumDto) {
    return this.forumService.create(dto);
  }

  @Get()
  findAll() {
    return this.forumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // +id 는 문자열을 number로 바꾸는 문법
    return this.forumService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateForumDto: UpdateForumDto) {
  //   return this.forumService.update(+id, updateForumDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }
}
