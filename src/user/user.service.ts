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

  async login(dto: UserLoginDto): Promise<ResponsePublicUser> {
    return new ResponsePublicUser().toDto(
      await this.userRepository.findOne({
        where: { ...dto }
      })
    );
  }

  async create(dto: CreateUserDto): Promise<ResponsePublicUser> {
    return new ResponsePublicUser().toDto(await this.userRepository.save(dto.toEntity()));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async mypage(userId: number): Promise<ResponsePublicUser> {
    return new ResponsePublicUser().toDto(await this.userRepository.findOne({where: { userId }})) ;

  }

  signup(createUserDto: CreateUserDto): Promise<User> {
    return Promise.resolve(undefined);
  }
}
