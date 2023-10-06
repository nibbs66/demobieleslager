import React from 'react';
import Admin from "../../../components/layout/Admin";
import {useRouter} from "next/router";
import prisma from "../../../lib/prisma";

import Messages from "../../../components/Messages/Admin/Messages";
import {getSession} from "next-auth/react";

const Index = ({messages, count}) => {

    const router = useRouter()
    const query = router.query
    const {page} = query
    return (
       <Messages
           messages={messages}
           count={count}
           page={page}
       />
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
    const session = await getSession({req: ctx.req})
    if (!session) {
        return {
            redirect: {
                destination: '/admin/',   //removed trailing slash feb17

                permanent: false,
            },
        };
    }

    const page = ctx.query.page
    const events = 10
    const offset = (page - 1) * events
    let res = await prisma.mails.findMany({
        take: events,
        skip: offset,
        orderBy: {
            id: 'asc',
        },
    })
    let count = await prisma.mails.count()
    res =  JSON.parse(JSON.stringify(res))
    return {
        props: {
            messages: res,
            count,
            session
        }
    }
}
