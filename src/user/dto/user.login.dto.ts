import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto{
  @ApiProperty({example: 'john doe'})
  userLogin: string;
  @ApiProperty({example: 'johnPW'})
  userPassword: string;
}