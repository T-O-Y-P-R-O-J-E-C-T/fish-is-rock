import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meeting, MeetingBuilder } from './entities/meeting.entity';
import { Repository } from 'typeorm';
import { MeetingRequestDto } from './dto/meeting.request.create.dto';
import { MeetingResponseDto } from './dto/meeting.response.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class MeetingService {
  constructor(
    @InjectRepository(Meeting)
    private readonly meetingRepository: Repository<Meeting>,
    private readonly userService: UserService,
  ) {}
  async create(dto: MeetingRequestDto): Promise<MeetingResponseDto> {
    return new MeetingResponseDto().toDto(
      await this.meetingRepository.save(
        new MeetingBuilder()
          .setUser(await this.userService.findOne(dto.id))
          .setMeetingContent(dto.meetingContent)
          .setMeetingTitle(dto.meetingTitle)
          .setDepartureDay(dto.departureDay)
          .setRegionCode(dto.regionCode)
          .setFishCode(dto.fishCode)
          .setMeetingPeople(dto.meetingPeople)
          .setMeetingCurrentPeople(dto.meetingCurrentPeople)
          .build()
      )
    );
  }

  findAll() {
    return `This action returns all meeting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} meeting`;
  }
}
