import { User, UserBuilder } from '../entities/user.entity';

export class CreateUserDto {
  userId: number;
  userLogin: string;
  userName: string;
  userPassword: string;
  userProfile: string;
  userLevel: string;

  toEntity(): User{
    return new UserBuilder()
      .setUserId(this.userId)
      .setUserLogin(this.userLogin)
      .setUserName(this.userName)
      .setUserPassword(this.userPassword)
      .setUserProfile(this.userProfile)
      .setUserLevel(this.userLevel)
      .build();
  }

  constructor(userId: number, userLogin: string, userName: string, userPassword: string, userProfile: string, userLevel: string) {
    this.userId = userId;
    this.userLogin = userLogin;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userProfile = userProfile;
    this.userLevel = userLevel;
  };
}

export class CreateUserDtoBuilder{
  userId: number;
  userLogin: string;
  userName: string;
  userPassword: string;
  userProfile: string;
  userLevel: string;

  setUserId(userId: number) {this.userId = userId; return this;};
  setUserLogin(userLogin: string){this.userLogin = userLogin; return this;};
  setUserName(userName: string){this.userName = userName; return this;};
  setUserPassword(userPassword: string){this.userPassword = userPassword; return this;};
  setUserProfile(userProfile: string){this.userProfile = userProfile; return this;};
  setUserLevel(userLevel: string){this.userLevel = userLevel; return this;};

  build(): CreateUserDto{
    return new CreateUserDto(
      this.userId,
      this.userLogin,
      this.userName,
      this.userPassword,
      this.userProfile,
      this.userLevel
    )
  }
}