import app from "./utils/app.js";
import cors from "@fastify/cors";
import donateRoutes from "./routes/donate.routes.js";
await app.register(cors, { origin: "*" });
await app.register(donateRoutes);
export default app; // ✅ exporta Fastify sem app.listen()
//# sourceMappingURL=server.js.map