import React from 'react';
import Client from "../../components/layout/Client";
import prisma from "../../lib/prisma";
import ProductList from "../../components/Products/ProductList";
import {useRouter} from "next/router";
const Index = ({products, count}) => {

    const router = useRouter()
    const query = router.query
    const {page} = query



    return (

                    <ProductList products={products} count={count} page={page} id={`aanbiedingen`} title={'Aanbiedingen'}/>

    );
};

export default Index;
Index.getLayout = function getLayout(page){
    return(
        <Client>
            {page}
        </Client>
    )
}
export const getServerSideProps = async (ctx) => {

    const page = ctx.query.page
    const events = 5
    const offset = (page - 1) * events
    let res = await prisma.products.findMany({
        where: {
            Aanbiedingen: {
                equals: true
            },
        },
        take: events,
        skip: offset,
        orderBy: {
            title: 'asc',
        },

    })
    const count = await prisma.products.count({
        where: {
            Aanbiedingen: {
                equals: true
            },
        },
    })
    res =  JSON.parse(JSON.stringify(res))
    return {
        props: {
            products: res,
            count
        }
    }
}
