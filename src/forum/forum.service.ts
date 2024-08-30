import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Forum } from './entities/forum.entity';
import { RequestForumDto } from './dto/request-forum.dto';

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
  findAll() {
    return this.forumRepository.find();
  }

  findOne(forumId: number) {
    return this.forumRepository.findOne({
      where: { forumId }
    })
  }

  remove(forumId: number) {
    return this.forumRepository.createQueryBuilder("forum")
      .softDelete()
      .where("forum.forum_id = :forumId", {forumId })
      .execute();
  }
}
