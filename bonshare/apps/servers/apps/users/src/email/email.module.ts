import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import {EjsAdapter} from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { EmailService } from './email.service';

@Module({
    imports:[
        ConfigModule,
        MailerModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: async(config: ConfigService) =>({
                transport: {
                    host:config.get<string>('SMTP_HOST'),
                    secure: true,
                    auth: {
                        user: config.get<string>('SMTP_MAIL'),
                        pass: config.get<string>('SMTP_PASSWORD')
                    },
                },
                defaults: {
                    from:'Bon-share'
                },
                template: {
                    dir: join(__dirname, "../../../../bonshare/email-templates"),
                    adapter: new EjsAdapter(),
                    options: {
                        strict: false,
                    }
                }
            }),
            inject: [ConfigService]
        })],
        providers:[EmailService],
        exports:[EmailService]
})
export class EmailModule {}
