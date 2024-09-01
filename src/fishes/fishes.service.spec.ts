import { Test, TestingModule } from '@nestjs/testing';
import { FishesService } from './fishes.service';

describe('FishesService', () => {
  let service: FishesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FishesService],
    }).compile();

    service = module.get<FishesService>(FishesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
