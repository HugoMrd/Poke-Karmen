import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from the React frontend
  app.enableCors({
    origin: 'http://localhost:3000', // URL of the React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001); // Using port 3001 to avoid conflict with React's default port
}
bootstrap();
