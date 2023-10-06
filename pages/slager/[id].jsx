import React from 'react';
import Client from "../../components/layout/Client";
import {useRouter} from "next/router";
import ProductList from "../../components/Products/ProductList";
import prisma from "../../lib/prisma";
const Id = ({products, count}) => {

    const router = useRouter()
    const query = router.query

const {id, page} = query


    return (

             <ProductList products={products} page={page} count={count} title={id} id={`slager/${id}`}/>

    );
};

    export default Id;
    Id.getLayout = function getLayout(page){
        return(
            <Client>
                {page}
            </Client>
        )
    }
export const getServerSideProps = async (ctx) => {

    const page = ctx.query.page
    const events = 8
    const offset = (page - 1) * events
    let res = await prisma.products.findMany({
        where: {
            categories: {
                    hasSome: [ctx.params.id]
                },
        },
        take: events,
        skip: offset,
        orderBy: {
            title: 'asc',
        },

    })
    let count = await prisma.products.count({
        where: {

            categories: {
                hasSome: [ctx.params.id]


            },
        },
    })

    res =  JSON.parse(JSON.stringify(res))
    return {
        props: {
            products: res,
            count,

        }
    }
}

