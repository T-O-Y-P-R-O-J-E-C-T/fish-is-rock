import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Forum, ForumBuilder } from './entities/forum.entity';
import { RequestForumDto } from './dto/request-forum.dto';
import { ResponseForumDto } from './dto/response-forum.dto';
import { UserService } from '../user/user.service';
import { addDays } from 'date-fns';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(Forum)
    private readonly forumRepository: Repository<Forum>,
    private userService: UserService
  ) {}

  async create(dto: RequestForumDto): Promise<Forum> {
    return this.forumRepository.save(new ForumBuilder()
      .setUser(await this.userService.findOne(dto.id))
      .setForumContent(dto.forumContent)
      .setForumTitle(dto.forumTitle)
      .setForumContent(dto.forumCategory)
      .build());
  }

  // todo
  // 페이지네이션 적용 예정
  async findAll() {
    const dto = new ResponseForumDto();
    return await this.forumRepository.find()
      .then(forums => forums.map(forum => {
        return dto.toDto(forum);
      }));
  }

  async findHotForum(): Promise<ResponseForumDto[]>{
    const dto = new ResponseForumDto();
    return await this.forumRepository.find({
      where: {
        created_at: Between(new Date(), addDays(new Date(), -7))
      },
      order: {views: 'ASC'},
      take: 5
    })
      .then(forums => forums.map(forum => {
        return dto.toDto(forum);
      }));
  }

  async findOne(id: number): Promise<ResponseForumDto> {
    return new ResponseForumDto()
      .toDto(await this.forumRepository.findOne(
        { where: { id }})
      );
  }

  remove(id: number) {
    return this.forumRepository.createQueryBuilder("forum")
      .softDelete()
      .where("forum.id = :id", { id })
      .execute();
  }
}
