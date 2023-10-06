import React from 'react';
import Client from "../../components/layout/Client";
import Overons from "../../components/About/Overons";

const Index = () => {
    return (
        <div className={` mx-auto max-w-7xl my-10 `}>
            <div className={`flex justify-evenly gap-x-10  2xl:mt-20 mx-5 md:mx-0 items-center bg-white/30  backdrop-blur-lg  rounded-lg`}>
              <Overons />
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
