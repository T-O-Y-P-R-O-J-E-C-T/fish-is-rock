import { Test, TestingModule } from '@nestjs/testing';
import { MeetingCommentService } from './meeting.comment.service';

describe('CommentService', () => {
  let service: MeetingCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingCommentService],
    }).compile();

    service = module.get<MeetingCommentService>(MeetingCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
