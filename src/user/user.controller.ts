import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/user.login.dto';
import { ResponsePublicUser } from './dto/response.public.user.dto';

@ApiTags('사용자 API')
@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: '회원가입'})
  create(@Body() dto: CreateUserDto): Promise<ResponsePublicUser> {
    return this.userService.create(dto);
  }

  @Post('/login')
  @ApiOperation({summary: '로그인'})
  login(@Body() dto: UserLoginDto) {
    return this.userService.login(dto);
  }

  @Get(':id')
  @ApiOperation({summary: '유저 조회'})
  mypage(@Param('id') id: string) {
    return this.userService.mypage(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: '유저 정보 수정'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary: '게시글 삭제'})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
