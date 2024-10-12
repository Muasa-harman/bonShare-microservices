import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(UserModule);

  app.useStaticAssets(join(__dirname, '..','public'));
  app.setBaseViewsDir(join(__dirname, '..', 'servers/email-templates'));
  app.setViewEngine('ejs');
  await app.listen(4001);
  console.log("bonshare user service")
}
bootstrap();
