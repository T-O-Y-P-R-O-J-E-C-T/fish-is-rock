import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './global/config/swagger.config';
// import { JwtRefreshTokenGuard } from './auth/guard/refreshToken.guard';
// import { JwtAccessTokenGuard } from './auth/guard/accessToken.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  // 컨트롤러로 들어오는 페이로드를 해당 타입에 맞는 DTO 클래스로 변환
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.useGlobalGuards(new JwtAccessTokenGuard());
  // app.useGlobalGuards(new JwtRefreshTokenGuard());
  await app.listen(3000);
}
bootstrap();
