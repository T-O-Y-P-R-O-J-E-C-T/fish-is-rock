import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Forum } from './entities/forum.entity';
import { RequestForumDto } from './dto/request-forum.dto';
import { ResponseForumDto } from './dto/response-forum.dto';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(Forum)
    private readonly forumRepository: Repository<Forum>,
  ) {}
  create(dto: RequestForumDto): Promise<Forum> {
    return this.forumRepository.save(dto.toForum());
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


  findOne(id: number) {
    return this.forumRepository.findOne({
      where: { id }
    })
  }

  remove(id: number) {
    return this.forumRepository.createQueryBuilder("forum")
      .softDelete()
      .where("forum.id = :id", { id })
      .execute();
  }
}
