import { ApiProperty } from '@nestjs/swagger';

export class MeetingRequestDto{
  @ApiProperty({example: 1, description: '유저의 ID'},)
  id: number;
  @ApiProperty({example: 'john doe title'})
  meetingTitle: string;
  @ApiProperty({example: 'john doe description'})
  meetingContent: string;
  @ApiProperty({example: '루어낚시'})
  meetingCategory: string;
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
}