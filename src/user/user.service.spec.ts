import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User, UserBuilder } from './entities/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto, CreateUserDtoBuilder } from './dto/create.user.dto';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;
  const user: User = new UserBuilder()
    .setUserId(1)
    .setUserName('Test User')
    .setUserLogin('Test Login')
    .setUserPassword('Test Password')
    .setUserProfile('Test Profile')
    .setUserLevel('gosu')
    .build();

  const createDto: CreateUserDto = new CreateUserDtoBuilder()
    .setUserId(1)
    .setUserName('Test User')
    .setUserLogin('Test Login')
    .setUserPassword('Test Password')
    .setUserProfile('Test Profile')
    .setUserLevel('gosu')
    .build();


  beforeEach(async () => {
    repository = {
      login: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
    } as any;
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,
        {
          provide: getRepositoryToken(User),
          useValue: repository
        }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('save user', async () => {

    // save를 할때 user를 담은 Promise 객체를 반환하도록 설정
    // 비동기 메소드에서 사용이 되는걸로 추정
    (repository.save as jest.Mock).mockResolvedValue(user);
    expect(await service.create(createDto)).toEqual(user);
  })


});
