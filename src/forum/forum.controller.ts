import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ForumService } from './forum.service';
import { RequestForumDto } from './dto/request-forum.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('포럼 API')
@Controller('/api/forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post()
  @ApiOperation({summary: 'forum 생성'})
  create(@Body() dto: RequestForumDto) {
    return this.forumService.create(dto);
  }

  @Get()
  @ApiOperation({summary: '모든 forum 몰아보기'})
  findAll() {
    return this.forumService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: '특정 forum 보기'})
  findOne(@Param('id') id: string) {
    // +id 는 문자열을 number로 바꾸는 문법
    return this.forumService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateForumDto: UpdateForumDto) {
  //   return this.forumService.update(+id, updateForumDto);
  // }

  @Delete(':id')
  @ApiOperation({summary: '특정 forum 삭제'})
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }
}
