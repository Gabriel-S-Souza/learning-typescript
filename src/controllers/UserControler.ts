import { Request, Response } from "express" // Precisa-se importar esses dados para tipar como Request e Response os parâmetros do método index "req" e "res"
import EmailService from "../services/EmailService"

const users = [
    {nome: "Gabriel", email: "gabriel12saraiva@gmail.com"},
]

export default {
    async index(req: Request, res: Response) { // Criado para fazer a listagem dos usuários
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        const msg = emailService.sendEmail(
            { name: "Gabriel Souza", email: "gabriel12saraiva@gmail.com" },
            { subject: "Saudações", content: "Seja bem vindo ao sistema" }
        )

        return res.json(msg)
    }
}