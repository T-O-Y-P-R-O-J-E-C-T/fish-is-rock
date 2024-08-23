export class UserLoginDto{
  userLogin: string;
  userPassword: string;

  constructor(userLogin: string, userPassword: string){
    this.userLogin = userLogin;
    this.userPassword = userPassword;
  }
}