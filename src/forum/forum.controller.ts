import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumRequestDto } from './dto/forum.request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ForumResponseDto } from './dto/forum.response.dto';

@ApiTags('포럼 API')
@Controller('/api/forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post()
  @ApiOperation({summary: 'forum 생성'})
  create(@Body() dto: ForumRequestDto) {
    return this.forumService.create(dto);
  }

  @Get()
  @ApiOperation({summary: '모든 forum 몰아보기'})
  findAll() {
    return this.forumService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: '특정 forum 보기'})
  findOne(@Param('id') id: string): Promise<ForumResponseDto> {
    // +id 는 문자열을 number로 바꾸는 문법
    return this.forumService.findOne(+id);
  }

  @Get('/hot')
  @ApiOperation({summary: '인기 게시글 (포럼)'})
  findHotForum(): Promise<ForumResponseDto[]>{
    return this.forumService.findHotForum();
  }

  @Delete(':id')
  @ApiOperation({summary: '특정 forum 삭제'})
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }
}
