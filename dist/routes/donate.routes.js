import CreateDonate from "../controllers/createDonation.js";
import getDonates from "../controllers/getDonates.js";
import app from "../utils/app.js";
export default function donateRoutes() {
    app.post("/api/donate/create", async (req, res) => {
        const { name, donate, message } = req.body;
        // Validação de parâmetros obrigatórios
        if (!name || typeof name !== "string") {
            return res.status(400).send({ success: false, message: "O parâmetro 'name' é obrigatório e deve ser uma string." });
        }
        if (donate === undefined || donate < 1) {
            return res.status(400).send({
                success: false,
                message: "Queríamos muito aceitar sua doação, mas devido a custos, nosso valor mínimo é de 1 real :("
            });
        }
        const result = await CreateDonate(name, Number(donate), message);
        // Retorna o resultado da função
        res.send(result);
    });
    app.get("/api/donate/getAll", async (req, res) => {
        const donates = await getDonates();
        return res.send(donates);
    });
}
//# sourceMappingURL=donate.routes.js.map