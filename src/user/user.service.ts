import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserServiceInterface } from './user.service.interface';
import { UserLoginDto } from './dto/user.login.dto';
import { ResponsePublicUser } from './dto/response.public.user.dto';

@Injectable()
export class UserService implements UserServiceInterface{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  login(dto: UserLoginDto): Promise<User> {
    return this.userRepository.findOne({
      where: {...dto}
    });
  }

  create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.save(dto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(userId: number) {
    return this.userRepository.findOne({where: { userId }});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  mypage(id: number): Promise<ResponsePublicUser> {
    return Promise.resolve(undefined);
  }

  signup(createUserDto: CreateUserDto): Promise<User> {
    return Promise.resolve(undefined);
  }
}
