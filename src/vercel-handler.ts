import app from "./server.js";

export default async function handler(req:any, res:any) {
    await app.ready();  // inicializa o fastify
    app.server.emit("request", req, res); // encaminha a request para o Fastify
}
