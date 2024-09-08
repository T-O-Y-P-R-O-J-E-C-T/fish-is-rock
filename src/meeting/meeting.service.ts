import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meeting, MeetingBuilder } from './entities/meeting.entity';
import { Between, Repository } from 'typeorm';
import { MeetingRequestDto } from './dto/meeting.request.create.dto';
import { MeetingResponseDto } from './dto/meeting.response.dto';
import { UserService } from '../user/user.service';
import { addDays } from 'date-fns';

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

  async findAll(): Promise<MeetingResponseDto[]> {
    const meetingResponseDto: MeetingResponseDto = new MeetingResponseDto();
    return await this.meetingRepository.find()
      .then(meetings => meetings.map(
        meeting => {
          return meetingResponseDto.toDto(meeting);
        }
      ))
  }

  async findOne(id: number): Promise<MeetingResponseDto> {
    return  new MeetingResponseDto().toDto(
      await this.meetingRepository.findOne({
        where: {id}
      })
    );
  }

  async findHotMeeting(): Promise<MeetingResponseDto[]>{
    const dto = new MeetingResponseDto();
    return await this.meetingRepository.find({
      where: {
        created_at: Between(new Date(), addDays(new Date(), -7))
      },
      order: {views: 'ASC'},
      take: 5
    })
      .then(meetings => meetings.map(meeting => {
        return dto.toDto(meeting);
      }));
  }

  async remove(id: number) {
    const deleteResult = await this.meetingRepository.softDelete(id);

    // 삭제 결과를 리턴합니다.
    if (deleteResult.affected) {
      // 삭제된 행이 있을 경우 성공 메시지를 리턴합니다.
      return {
        message: `Entity with id ${id} has been soft deleted.`,
        affectedRows: deleteResult.affected,
      };
    } else {
      // 삭제된 행이 없을 경우 오류 메시지를 리턴합니다.
      return {
        message: `Entity with id ${id} not found.`,
        affectedRows: 0,
      };
    }
  }
}
