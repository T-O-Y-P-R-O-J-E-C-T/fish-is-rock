import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../global/entities/global.entities';

@Entity()
export class User extends BaseTimeEntity{
  @PrimaryGeneratedColumn({name: 'user_id'})
  userId: number;

  @Column({name: 'user_login'})
  userLogin: string;

  @Column({name: 'user_name'})
  userName: string

  @Column({name: 'user_password'})
  userPassword: string

  @Column({name: 'user_profile'})
  userProfile: string

  @Column({name: 'user_level'})
  userLevel: string;

  constructor(userId: number, userLogin: string, userName: string, userPassword: string, userProfile: string, userLevel: string) {
    super();
    this.userId = userId;
    this.userLogin = userLogin;
    this.userName = userName;
    this.userPassword = userPassword;
    this.userProfile = userProfile;
    this.userLevel = userLevel;
  };
}

export class UserBuilder{
  private userId: number;
  private userLogin: string;
  private userName: string;
  private userPassword: string;
  private userProfile: string;
  private userLevel: string;

  setUserId(userId: number) {this.userId = userId; return this;};
  setUserLogin(userLogin: string){this.userLogin = userLogin; return this;};
  setUserName(userName: string){this.userName = userName; return this;};
  setUserPassword(userPassword: string){this.userPassword = userPassword; return this;};
  setUserProfile(userProfile: string){this.userProfile = userProfile; return this;};
  setUserLevel(userLevel: string){this.userLevel = userLevel; return this;};

  build(): User{
    return new User(
      this.userId,
      this.userLogin,
      this.userName,
      this.userPassword,
      this.userProfile,
      this.userLevel
    )
  }
}