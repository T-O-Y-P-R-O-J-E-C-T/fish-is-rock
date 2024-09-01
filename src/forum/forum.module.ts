import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Forum } from './entities/forum.entity';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity';

@Module({
  imports:
    [UserModule,
      TypeOrmModule.forFeature([
        Forum,
        User
      ])
    ],

  controllers: [ForumController],
  providers: [ForumService, UserService],
})
export class ForumModule {}
