import React from 'react';
import Admin from "../../../components/layout/Admin";
import {getSession} from "next-auth/react";
import prisma from "../../../lib/prisma";
import Message from "../../../components/Messages/Admin/Message";
import {useRouter} from "next/router";
const Id = ({message}) => {
    const router = useRouter()
    const {query} = router

    return (
        <div>
          <Message message={message} page={query.page} />
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

    let res = await prisma.mails.findUnique({
        where: {
            id
        },



    })

    res =  JSON.parse(JSON.stringify(res))
    return {
        props: {
            message: res,
            session

        }
    }
}
