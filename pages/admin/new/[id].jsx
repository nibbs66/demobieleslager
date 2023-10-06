import React from 'react';
import {useRouter} from "next/router";
import Admin from "../../../components/layout/Admin";
import NewForm from "../../../components/Forms/NewForm";
import {getSession} from "next-auth/react";
import prisma from "../../../lib/prisma";
const Id = () => {
    const router = useRouter()
    const query = router.query
   const {id} = query
    return (
        <div className={`py-10 px-5 xl:px-0`}>
            <div className={`mx-auto max-w-6xl shadow-2xl  rounded-lg p-5 bg-white`}>
            <NewForm />
            </div>
        </div>
    );
};
export default Id
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

    return {
        props: {

            session
        }
    }
}
