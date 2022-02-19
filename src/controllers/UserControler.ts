import { Request, Response } from "express" // Precisa-se importar esses dados para tipar como Request e Response os métodos do método index "req" e "res"

const users = [
    {nome: "Gabriel", email: "gabriel12saraiva@gmail.com"},
]

export default {
    async index(req: Request, res: Response) { // Criado para fazer a listagem dos usuários
        return res.json(users)
    }
}