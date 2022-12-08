import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const noteId = req.query.id

    if (req.method === 'DELETE') {
        const note = await prisma.message.delete({
            where: { id: noteId }
        })
        res.json(note)
    } else {
        console.log("Note could not be created");
    }
}