import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionMiddleware = session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 24,
      httpOnly: true
    }
  });
  app.use(sessionMiddleware);
  await app.listen(3000);

}
bootstrap();
