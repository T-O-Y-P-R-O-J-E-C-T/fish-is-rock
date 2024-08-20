import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../../message/entities/message.entity';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn({name: 'attachment_id'})
  attachmentId: number;

  @ManyToOne(type => Message,
    (message) => message.messageId,
    { onDelete: 'CASCADE' })
  @JoinColumn({name: 'message_id'})
  messageId: number;

  @Column({name: 'file_url'})
  fileUrl: string;

  @Column({name: 'file_type'})
  fileType: string;
}
