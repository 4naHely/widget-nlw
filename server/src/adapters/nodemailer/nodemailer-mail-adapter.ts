import nodemailer from 'nodemailer'; 
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d78300a31edc90",
      pass: "85c6b6f1f2f365"
    }
  });
  
export class NodemailerMailAdapter implements MailAdapter {
    
    async sendMail({subject, body}: SendMailData) {
        
        await transport.sendMail({
            from: 'Equipe Wifget <oi@widget.com>',
            to: 'Aninha <batata@email.com>',
            subject,
            html: body,
        })

    }
}