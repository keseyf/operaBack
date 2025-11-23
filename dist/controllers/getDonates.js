import prisma from "../utils/prisma.js";
export default async function getDonates() {
    return await prisma.donate.findMany({
        orderBy: {
            createdAt: "desc"
        },
        take: 10
    });
}
//# sourceMappingURL=getDonates.js.map