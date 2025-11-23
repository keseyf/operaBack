import app from "../utils/app.js";
import cors from "@fastify/cors";
import donateRoutes from "../routes/donate.routes.js";

// Plugins
await app.register(cors, { origin: "*" });
await app.register(donateRoutes);

// Exporta handler (IMPORTANTE)
export default async function handler(req: any, res: any) {
    await app.ready();
    app.server.emit('request', req, res);
}
