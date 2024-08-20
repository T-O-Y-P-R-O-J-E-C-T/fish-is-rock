import { User } from '../entities/user.entity';

export class CreateUserDto {
  userId: number;
  userLogin: string;
  userName: string;
  userPassword: string;
  userProfile: string;
  userLevel: string;

  toEntity(): User{
    const user = new User();
    user.user_id = this.userId;
    user.user_login = this.userLogin;
    user.user_name = this.userName;
    user.user_password = this.userPassword;
    user.user_profile = this.userProfile;
    user.user_level = this.userLevel;
    return user;
  }
}