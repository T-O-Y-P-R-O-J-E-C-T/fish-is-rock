import { Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'fish_codes'})
export class FishCodes{
  @PrimaryColumn({type: 'char', length: 3} )
  code: string;
}

@Entity({name: 'region_codes'})
export class RegionCodes{
  @PrimaryColumn({type: 'char', length: 3} )
  code: string;
}

@Entity({name: 'category_codes'})
export class CategoryCodes{
  @PrimaryColumn({type: 'char', length: 3} )
  code: string;
}
