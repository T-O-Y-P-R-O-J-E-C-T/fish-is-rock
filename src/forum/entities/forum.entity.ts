import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Forum {
  @PrimaryGeneratedColumn()
  forum_id: number;

  @ManyToOne(() => User, (user) => user.user_id)
  @JoinColumn({name: "user_id"})
  user_id: number;

  @Column()
  forum_title: string;

  @Column()
  forum_content: string;

  @Column()
  forum_like: number;

}
