// 유저의 개인정보를 제외한 정보를 포함하는 dto
import { User } from '../entities/user.entity';

export class ResponsePublicUser {
  userId: number;
  userName: string;
  userProfile: string;

  toDto(user: User): ResponsePublicUser{

    return new ResponsePublicUserBuilder()
      .setUserId(user.userId)
      .setUserName(user.userName)
      .setUserProfile(user.userProfile)
      .build();
  }
}

export class ResponsePublicUserBuilder extends ResponsePublicUser{
  setUserId(userId: number) {this.userId = userId; return this;};
  setUserName(userName: string) {this.userName = userName; return this;};
  setUserProfile(userProfile: string){this.userProfile = userProfile; return this;};
  build(): ResponsePublicUserBuilder{
    const responsePublicUser = new ResponsePublicUserBuilder();
    responsePublicUser.userId = this.userId;
    responsePublicUser.userName = this.userName;
    responsePublicUser.userProfile = this.userProfile;
    return responsePublicUser;
  }
}