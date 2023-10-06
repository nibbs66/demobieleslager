import React from 'react';
import Client from "../../components/layout/Client";
import MetaHead from "../../components/MetaHead";
import CategoryPage from "../../components/Category/CategoryPage";
import prisma from "../../lib/prisma";
import { useSession, signIn, signOut } from "next-auth/react"
const Index = ({products}) => {
    const {data: session} = useSession()

    return (
      <div className={` mx-auto max-w-7xl my-10 `}>
          <div className={`flex justify-end  mx-5 md:mx-0 items-center bg-white/30  backdrop-blur-lg  rounded-lg`}>
              <MetaHead title={`Categories`} name={`Categories`} description={'Vlees, Kip, Vis, andere'} />
              <div className={` flex justify-center items-center `}>
                  <CategoryPage />
              </div>

          </div>
      </div>
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

