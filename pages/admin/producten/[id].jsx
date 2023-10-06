import React from 'react';
import Admin from "../../../components/layout/Admin";
import {useRouter} from "next/router";
import prisma from "../../../lib/prisma";
import Product from "../../../components/Products/Admin/Product";
import {getSession} from "next-auth/react";

const Id = ({product}) => {
    const router = useRouter()
    const {query} = router
    const {page, order, category} = query


    return (
        <div className={`mx-auto max-w-7xl`}>
            <Product product={product} page={page} order={order} category={category}/>
        </div>
    );
};

    export default Id;
    Id.getLayout = function getLayout(page){
        return(
            <Admin>
                {page}
            </Admin>
        )
    }
export const getServerSideProps = async (ctx) => {
    const session = await getSession({req: ctx.req})
    if (!session) {
        return {
            redirect: {
                destination: '/admin/',   //removed trailing slash feb17

                permanent: false,
            },
        };
    }

    const id = ctx.query.id
    console.log(id)
    let res = await prisma.products.findUnique({
        where: {
            id
        },


    })

    res =  JSON.parse(JSON.stringify(res))
    return {
        props: {
            product: res,
            session

        }
    }
}
