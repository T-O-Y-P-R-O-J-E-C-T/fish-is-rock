import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserServiceInterface } from './user.service.interface';
import { UserLoginDto } from './dto/user.login.dto';
import { ResponsePublicUser } from './dto/response.public.user.dto';

@Injectable()
export class UserService implements UserServiceInterface {
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      userId: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return `User with ID ${id} has been removed`;
  }

  async mypage(userId: number): Promise<ResponsePublicUser> {
    const user = await this.userRepository.findOne({where: { userId }});
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return new ResponsePublicUser().toDto(user);
  }

  async signup(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto.toEntity());
  }

  async getUser(userLogin: string): Promise<User> {
    const user = await this.userRepository.findOne({where: { userLogin }});
    if (!user) {
      throw new NotFoundException(`User with ID ${userLogin} not found`);
    }
    return user;
  }

  async updateUser(updateData: Partial<User>): Promise<User> {
    const { userLogin, ...dataToUpdate } = updateData;
    const user = await this.userRepository.preload({
      userLogin,
      ...dataToUpdate,
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${userLogin} not found`);
    }
    return this.userRepository.save(user);
  }
}