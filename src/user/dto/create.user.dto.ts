import { User, UserBuilder } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({example: 'example'})
  userLogin: string;
  @ApiProperty({example: 'john doe'})
  userName: string;
  @ApiProperty({example: 'lorem ipsum'})
  userPassword: string;
  @ApiProperty({example: 'picture.png'})
  userProfile: string;
  @ApiProperty({example: 'HIGH'})
  userLevel: string;

  toEntity(): User{
    return new UserBuilder()
      .setUserLogin(this.userLogin)
      .setUserName(this.userName)
      .setUserPassword(this.userPassword)
      .setUserProfile(this.userProfile)
      .setUserLevel(this.userLevel)
      .build();
  }
}

export class CreateUserDtoBuilder extends CreateUserDto{
  setUserLogin(userLogin: string){this.userLogin = userLogin; return this;};
  setUserName(userName: string){this.userName = userName; return this;};
  setUserPassword(userPassword: string){this.userPassword = userPassword; return this;};
  setUserProfile(userProfile: string){this.userProfile = userProfile; return this;};
  setUserLevel(userLevel: string){this.userLevel = userLevel; return this;};

  build(): CreateUserDto{
    const dto = new CreateUserDto();
    dto.userLogin = this.userLogin;
    dto.userName = this.userName;
    dto.userPassword = this.userPassword;
    dto.userProfile = this.userProfile;
    dto.userLevel = this.userLevel;
    return dto;
  }
}