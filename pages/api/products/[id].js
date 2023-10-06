import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const {
        method,
        query: {id}
    } = req;

    if (method === "PUT") {

      const data = req.body

        await prisma.$connect()
        const update = await prisma.products.update({
            where: {
                id
            },
           data
        })
        res.json(update)


    }
}
