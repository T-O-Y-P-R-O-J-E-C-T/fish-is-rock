// src/dto/auth.dto.ts

import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
