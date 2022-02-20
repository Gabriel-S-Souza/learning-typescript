interface IEmailTo { //Começar interfaces com I é uma convensão, não é obrigatório
    name: string
    email: string
}
interface IEmailMessage {
    subject: string
    content: string
    attachment?: string[] // o ? é para dizer que esse parâmetro é opicional e o [] é para dizer que é uma array (nesse caso uma array de strings)
}

interface IMessageDTO {
    to: IEmailTo,
    message: IEmailMessage
}

//DTO: Data Transfer Object (Conceito da Metodologia DDD)

interface IEmailService {
    sendEmail(request: IMessageDTO): void
}
class EmailService implements IEmailService {
    sendEmail({to, message}: IMessageDTO) { //
        return `Email enviado para ${to.name}: assunto: ${message.subject}, mensagem: ${message.content}`
    }
}

export default EmailService