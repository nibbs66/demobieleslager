import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const {
        method,

    } = req;

    if (method === "POST") {

        const {title, per, price, image, categories, inStock, img, Aanbiedingen} = req.body;
        await prisma.$connect()

       const newProduct = await prisma.products.create({
            data: {
                title: title,
                per,
                price,
                image,
                categories,
                inStock,
                img,
                Aanbiedingen,
                v: 0

            },
        });
        res.json(newProduct)


    }

}
