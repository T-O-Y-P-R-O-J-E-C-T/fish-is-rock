import { Module } from '@nestjs/common';
import { MeetingCommentService } from './meeting.comment.service';
import { MeetingCommentController } from './meeting.comment.controller';

@Module({
  controllers: [MeetingCommentController],
  providers: [MeetingCommentService],
})
export class MeetingCommentModule {}
