import React from 'react';
import Admin from "../../components/layout/Admin";

import SignIn from "../../components/Forms/SignIn";
import Card from "../../components/Cards/Card"
import {useSession} from "next-auth/react";

const Home = () => {


    const [checked, setChecked] = React.useState(false);
    return (
        <div className={` h-screen mx-auto max-w-7xl `}>

          <div className={`my-20 px-10 sm:px-0` }>
              <SignIn />


          </div>

        </div>
    );
};

export default Home;
Home.getLayout = function getLayout(page){
    return(
        <Admin>
            {page}
        </Admin>
    )
}
//    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
