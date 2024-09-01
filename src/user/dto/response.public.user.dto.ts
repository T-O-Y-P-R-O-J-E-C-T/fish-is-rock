// 유저의 개인정보를 제외한 정보를 포함하는 dto
import { User } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ResponsePublicUser {
  @ApiProperty({example: 1})
  id: number;
  @ApiProperty({example: 'john doe'})
  userName: string;
  @ApiProperty({example: 'picture.png'})
  userProfile: string;

  toDto(user: User): ResponsePublicUser{
    return new ResponsePublicUserBuilder()
      .setId(user.id)
      .setUserName(user.userName)
      .setUserProfile(user.userProfile)
      .build();
  }
}

export class ResponsePublicUserBuilder extends ResponsePublicUser{
  setId(id: number) {this.id = id; return this;};
  setUserName(userName: string) {this.userName = userName; return this;};
  setUserProfile(userProfile: string){this.userProfile = userProfile; return this;};
  build(): ResponsePublicUserBuilder{
    const responsePublicUser = new ResponsePublicUserBuilder();
    responsePublicUser.id = this.id;
    responsePublicUser.userName = this.userName;
    responsePublicUser.userProfile = this.userProfile;
    return responsePublicUser;
  }
}