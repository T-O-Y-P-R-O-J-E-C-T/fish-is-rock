import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MeetingRequestDto } from './dto/meeting.request.create.dto';
import { MeetingResponseDto } from './dto/meeting.response.dto';

@ApiTags('동출구인 API')
@Controller('/api/meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post()
  @ApiOperation({summary: '찾아요 글 작성'})
  create(@Body() dto: MeetingRequestDto): Promise<MeetingResponseDto> {
    return this.meetingService.create(dto);
  }

  @Get()
  @ApiOperation({summary: '찾아요 리스트'})
  findAll(): Promise<MeetingResponseDto[]> {
    return this.meetingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingService.remove(+id);
  }
}
