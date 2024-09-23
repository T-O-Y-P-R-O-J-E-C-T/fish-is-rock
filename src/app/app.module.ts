import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../../dbConfig';
import { ConfigModule } from '@nestjs/config';
import { AttachmentModule } from '../attachment/attachment.module';
import { UserModule } from '../user/user.module';
import { ForumModule } from '../forum/forum.module';
import { MeetingModule } from '../meeting/meeting.module';
import { ParticipantModule } from '../participant/participant.module';
import { AuthModule } from 'src/auth/auth.module';
import { ChatModule } from '../chat/chat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  AttachmentModule, UserModule,ChatModule, ForumModule,MeetingModule, ParticipantModule,
  AuthModule,AttachmentModule, UserModule,ChatModule, ForumModule,MeetingModule, ParticipantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
