import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from 'src/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenData } from 'src/types/auth.type';

import * as bcrypt from "bcrypt";
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from 'src/user/dto/user.login.dto';
import { log } from 'console';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {
        console.log(this.configService.get<string>('JWT_SECRET'));
    }

    async login(loginDto: LoginDto): Promise<TokenData> {
        // 유저 인증 및 토큰 발급
        const user = await this.validateUser(loginDto);
        console.log("not error1");
        const accessToken = await this.createAccessToken(user);
        console.log("not error2");
        const refreshToken = await this.createRefreshToken(user);
        console.log("not error3");
        console.log(refreshToken);
        console.log(user);
        
        // 유저 refresh_token 업데이트
        await this.setUserCurrentRefreshToken(
            user.id,
            refreshToken
        );
        console.log("not Err");
        
        return {
            accessToken,
            refreshToken
        };
    }

    async logout(userLogin: string): Promise<void> {
        // DB의 currentRefreshToken 을 null로 교체
        await this.userService.updateUser({
            userLogin,
            refreshToken: null
        });
    }

    async refresh(userLogin: string, refreshToken: string): Promise<TokenData> {
        // DB의 refresh token과 현재 토큰 비교
        const result = this.compareUserRefreshToken(userLogin, refreshToken);
        if (!result) {
            throw new UnauthorizedException("You need to log in first");
        }

        // 새로운 access token 발급
        const user = await this.userService.getUser(userLogin);
        const accessToken = await this.createAccessToken(user);

        return {
            accessToken,
            refreshToken
        }
    }

    // 유저 id, password 확인
    async validateUser(loginDto: LoginDto): Promise<User> {
        const { userId, password } = loginDto;
        const userLog:UserLoginDto = { userLogin : userId, userPassword : password }
        const user1 = await this.userService.login(userLog);
    
        console.log(user1);
        
        const user = await this.userService.getUser(userId);
        
        console.log(user);
        

        // 비밀번호 비교
        // const comparePassword = await bcrypt.compare(password, user.userPassword);
        // if (!comparePassword) {
        //     throw new UnauthorizedException("password is wrong");
        // }

        return user;
    }

    // access_token 발급
    async createAccessToken(user: User): Promise<string> {
        console.log("not error5");
        const payload = {
            userId: user.userLogin,
            name: user.userName,
        };

        const access_token = await this.jwtService.signAsync(
            payload,
            {
                // secret: this.configService.get<string>("JWT_SECRET"),
                expiresIn: 15,
                secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET')
                
            }
        );  
        console.log(access_token);
        
        return access_token;
    }

    // refresh_token 발급
    async createRefreshToken(user: User): Promise<string> {
        const payload = {
            userId: user.id
        };

        const refreshToken = await this.jwtService.signAsync(
            payload,
            {
                expiresIn: 15,
                secret:this.configService.get('JWT_REFRESH_TOKEN_SECRET'), 
                // this.configService.get<string>("JWT_SECRET"),
                 
                // this.configService.get<string>("JWT_ACCESS_TOKEN_EXP") || '15m'
            }
        );

        return refreshToken;
    }

    // DB의 refresh_token과 현재 refresh_token 비교
    async compareUserRefreshToken(userLogin: string, refreshToken: string): Promise<boolean> {
        const user = await this.userService.getUser(userLogin);

        // 사용자에게 저장된 refresh token이 없으면 false 반환
        if (!user.refreshToken) return false;

        // refresh_token 비교
        const result = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!result) return false;

        return true;
    }

    // DB user 데이터에 refresh_token 저장
    async setUserCurrentRefreshToken(userId: number, refreshToken: string): Promise<void> {
        // refresh_token 암호화
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        
        // 현재 날짜 시간 기준으로 토큰 만료 시간을 더함
        const now = new Date();
        const exp = 60
        // const exp = parseInt(this.configService.get<string>("JWT_REFRESH_TOKEN_EXP"));
        const refreshTokenExp = new Date(now.getTime() + exp);

        // DB 업데이트
        await this.userService.updateUser({
            id: userId,
            refreshToken: hashedRefreshToken,
            currentRefreshTokenExp: refreshTokenExp
        });
    }
}