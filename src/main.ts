import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setupSwagger } from './global/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const sessionMiddleware = session({
  //   secret: process.env.secret,
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: {
  //     maxAge: 30 * 60 * 24,
  //     httpOnly: true
  //   }
  // });
  // app.use(sessionMiddleware);

  setupSwagger(app);

  // 컨트롤러로 들어오는 페이로드를 해당 타입에 맞는 DTO 클래스로 변환
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);

}
bootstrap();
