import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FishCodes } from '../../global/entities/global.code.entity';

@Entity()
export class Fish {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => FishCodes, code => code.code)
  @JoinColumn({name: "code"})
  code: FishCodes;
}
