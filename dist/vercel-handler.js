// IMPORTA do dist
import app from "./server.js"; // se o server.ts compilou para dist/server.js
export default async function handler(req, res) {
    await app.ready(); // garante que o Fastify esteja pronto
    app.server.emit("request", req, res);
}
//# sourceMappingURL=vercel-handler.js.map