// src/types/auth.type.ts

import { Request } from 'express';

export interface AccessTokenPayload {
  userId: string;
  name: string;
  age: number;
  sex: string;
  iat?: number;
  exp?: number;
}

export interface RefreshTokenPayload {
  userId: string;
  iat?: number;
  exp?: number;
}

export interface AuthenticatedRequest extends Request {
  user: AccessTokenPayload | RefreshTokenPayload;
}

export type JwtPayload = AccessTokenPayload | RefreshTokenPayload;

export type JwtToken = string;

export interface TokenData {
  accessToken: JwtToken;
  refreshToken: JwtToken;
}

export interface IAuthService {
  compareUserRefreshToken(userId: string, refreshToken: string): Promise<boolean>;
  // 다른 필요한 메서드 시그니처를 여기에 추가할 수 있습니다.
}