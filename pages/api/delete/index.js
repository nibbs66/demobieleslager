import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const {method, value} = req;
    if (method === "DELETE") {
        const {id} = req.query;
        const {authorization} = req.headers;
        if (authorization === 'mails') {
            const deleteMail = await prisma.mails.delete({
                where: {
                    id
                }
            })
            res.status(201).json(deleteMail)
        } else if( authorization === 'product') {
            const deleteProduct = await prisma.products.delete({
                where: {
                    id
                }
            })
            const response = JSON.parse(JSON.stringify(deleteProduct))
            res.json(response)
        }
    }
}
