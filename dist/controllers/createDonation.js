import prisma from "../utils/prisma.js";
export default async function CreateDonate(name, donate, message) {
    // Validações básicas
    if (name.length < 4) {
        return { success: false, message: "O nome deve ter pelo menos 4 letras." };
    }
    if (donate < 1) {
        return {
            success: false,
            message: "Queríamos muito aceitar sua doação, mas devido a custos internos, nosso valor mínimo é de 1 real :("
        };
    }
    try {
        // Criação da doação
        await prisma.donate.create({
            data: {
                name,
                donate,
                message: message ?? null, // se não tiver message, passa null
            }
        });
        return { success: true, message: "Doação criada com sucesso! Muito obrigado pelo apoio." };
    }
    catch (error) {
        // Log do erro (opcional)
        console.error("Erro ao criar doação:", error);
        return { success: false, message: "Nos desculpe, não foi possível processar a doação." };
    }
}
//# sourceMappingURL=createDonation.js.map