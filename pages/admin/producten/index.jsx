import React from 'react';
import Admin from "../../../components/layout/Admin";
import {useRouter} from "next/router";
import prisma from "../../../lib/prisma";
import ProductTable from "../../../components/Products/Admin/ProductTable";
import {getSession} from "next-auth/react";

const Index = ({products, count}) => {

    const router = useRouter()
    const query = router.query
    const {page, order } = query

    return (
       <ProductTable products={products} count={count} order={order} page={page} />
    );
};

export default Index;
Index.getLayout = function getLayout(page){
    return(
        <Admin>
            {page}
        </Admin>
    )
}
export const getServerSideProps = async (ctx) => {
    const {page, category, order } = ctx.query
    const session = await getSession({req: ctx.req})
    if (!session) {
        return {
            redirect: {
                destination: '/admin/',   //removed trailing slash feb17

                permanent: false,
            },
        };
    }


    const events = 10
    const offset = (page - 1) * events
    let res =  await prisma.products.findMany({
        take: events,
        skip: offset,
        orderBy: {
            [category]: order,
        },
    })
    let count = await prisma.products.count()
    res =  JSON.parse(JSON.stringify(res))
    return {
        props: {
            products: res,
            count,
            session
        }
    }
}
