import { NestFactory } from '@nestjs/core';
import { SafarisModule } from './safaris.module';

async function bootstrap() {
  const app = await NestFactory.create(SafarisModule);
  await app.listen(4002);
  console.log("bonshare trip service")
}
bootstrap();
