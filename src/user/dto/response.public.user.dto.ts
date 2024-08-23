// 유저의 개인정보를 제외한 정보를 포함하는 dto
export class ResponsePublicUser {
  userId: number;
  userName: string;
  userProfile: string;
}