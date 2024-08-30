import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forum } from './entities/forum.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Forum])],
  controllers: [ForumController],
  providers: [ForumService],
})
export class ForumModule {}
