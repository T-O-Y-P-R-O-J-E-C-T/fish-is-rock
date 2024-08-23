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
}

export class UserBuilder extends User{

  setUserId(userId: number) {this.userId = userId; return this;};
  setUserLogin(userLogin: string){this.userLogin = userLogin; return this;};
  setUserName(userName: string){this.userName = userName; return this;};
  setUserPassword(userPassword: string){this.userPassword = userPassword; return this;};
  setUserProfile(userProfile: string){this.userProfile = userProfile; return this;};
  setUserLevel(userLevel: string){this.userLevel = userLevel; return this;};

  build(): User{
    const user: User = new User()
    user.userId = this.userId;
    user.userLogin = this.userLogin;
    user.userName = this.userName;
    user.userPassword = this.userPassword;
    user.userProfile = this.userProfile;
    user.userLevel = this.userLevel;
    return user;

  }
}