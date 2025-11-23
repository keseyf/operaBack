import app from "./utils/app.js";
import cors from "@fastify/cors";
import dotenv from "dotenv"
import donateRoutes from "./routes/donate.routes.js";
dotenv.config()

const port = Number(process.env.PORT)

if(!port ){
    throw new Error("Porta não definida no dot env.")
}

// Config do cors
app.register(cors, {
    origin: "*"
})

// Config de rotas
app.register(donateRoutes)

// Inicialiazação do server
app.listen({
    port: port
}, ()=>{
    console.log(`[+] Serivdor Back End Iniciado com sucesso na porta [${port}]!`)
})