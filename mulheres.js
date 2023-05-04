const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

const mulheres = [
    {
        nome: "Simara Conceição",
        imagem: "https://github.com/simariaconceicao.png",
        minibio: "Desenvolvedora e Instrutora"
    },

    {
        nome: "Iana Chan",
        imagem: "https://bit.ly/3JCXBqP",
        minibio: "Fundadora da Programaria"
    },

    {
        nome: "Nina da Hora",
        imagem: "https://bit.ly/3FKpFaz",
        minibio: "Hacker antirracista"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

app.listen(porta, mostraPorta)
app.use(router.get("/mulheres", mostraMulheres))
