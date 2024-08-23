import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { ResponsePublicUser } from './dto/response.public.user.dto';
import { UserLoginDto } from './dto/user.login.dto';

export interface UserServiceInterface{
    login(id: UserLoginDto):Promise<User>;
    signup(createUserDto: CreateUserDto):Promise<User>;
    mypage(id: number): Promise<ResponsePublicUser>;
}