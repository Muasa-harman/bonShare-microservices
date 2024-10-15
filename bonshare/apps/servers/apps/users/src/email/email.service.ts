import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

type mailerOptions = {
  subject: string;
  email: string;
  name: string;
  template: string;
  activationCode: string;
};

@Injectable()
export class EmailService {
  constructor(private mailServer: MailerService) {}
  async sendMail({
    subject,
    email,
    name,
    activationCode,
    template,
  }: mailerOptions) {
    await this.mailServer.sendMail({
      to: email,
      subject,
      template,
      context: { name, activationCode },
    });
  }
}
