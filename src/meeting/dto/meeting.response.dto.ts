import { ApiProperty } from '@nestjs/swagger';
import { Meeting } from '../entities/meeting.entity';
import { ResponsePublicUser } from '../../user/dto/response.public.user.dto';

export class ResponseMeetingDto{
  @ApiProperty({example: 1, description: '유저의 ID'},)
  user: ResponsePublicUser;
  @ApiProperty({example: 'john doe title'})
  meetingTitle: string;
  @ApiProperty({example: 'john doe description'})
  meetingContent: string;
  @ApiProperty({example: '2024-11-11'})
  departureDay: Date;
  @ApiProperty({example: 'SEO'})
  regionCode: string;
  @ApiProperty({example: 'FIS'})
  fishCode: string;
  @ApiProperty({example: 5})
  meetingPeople: number;
  @ApiProperty({example: 1})
  meetingCurrentPeople: number;

  toDto(meeting: Meeting): ResponseMeetingDto{
    this.user = new ResponsePublicUser().toDto(meeting.user);
    this.meetingTitle = meeting.meetingTitle;
    this.meetingContent = meeting.meetingContent;
    this.departureDay = meeting.departureDay;
    this.regionCode = meeting.regionCode;
    this.fishCode = meeting.fishCode;
    this.meetingPeople = meeting.meetingPeople;
    this.meetingCurrentPeople = meeting.meetingCurrentPeople;
    return this;
  }
}