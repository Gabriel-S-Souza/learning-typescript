"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendEmail({ to, message }) {
        return `Email enviado para ${to.name}: assunto: ${message.subject}, mensagem: ${message.content}`;
    }
}
exports.default = EmailService;
