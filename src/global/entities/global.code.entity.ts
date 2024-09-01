import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'fish_codes'})
export class FishCodes{
  @PrimaryGeneratedColumn()
  code: string;
}

@Entity({name: 'region_codes'})
export class RegionCodes{
  @PrimaryGeneratedColumn()
  code: string;
}
