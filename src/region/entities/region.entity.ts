import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RegionCodes } from '../../global/entities/global.code.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => RegionCodes, code => code.code)
  @JoinColumn({name: "code"})
  code: RegionCodes;
}
