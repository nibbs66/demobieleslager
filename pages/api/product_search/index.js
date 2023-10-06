import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const {method} = req;

        const {search} = req.query;

     const product = await prisma.products.findMany({
            where: {
               OR: [
                   { title: { contains: search } },
                   { categories: { hasSome: [search] } },
               ]
            },
        });
        const response = JSON.parse(JSON.stringify(product))
   res.json(response)
        //res.status(200).send(product);





}


