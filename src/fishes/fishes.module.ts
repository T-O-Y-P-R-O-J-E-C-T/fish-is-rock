import { Module } from '@nestjs/common';
import { FishesService } from './fishes.service';
import { FishesController } from './fishes.controller';

@Module({
  controllers: [FishesController],
  providers: [FishesService],
})
export class FishesModule {}
