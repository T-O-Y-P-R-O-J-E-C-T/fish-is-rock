import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../../message/entities/message.entity';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn()
  attachment_id: number;

  @ManyToOne(type => Message,
    (message) => message.message_id,
    { onDelete: 'CASCADE' })
  @JoinColumn({name: 'message_id'})
  message_id: number;

  @Column()
  file_url: string;

  @Column()
  file_type: string;
}
