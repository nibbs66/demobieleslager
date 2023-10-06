import React from 'react';
import ClientNavbar from "../Navbar/ClientNavbar";
import ClientFooter from "../Footers/ClientFooter";


const Client = ({children}) => {
    return (
        <div
            className={` mx-auto h-screen max-w-screen-2xl overflow-y-auto scroll-smooth bg-[url('../public/img/steak2.png')] bg-center bg-no-repeat bg-cover transition duration-1000 `}
        >
          <div className={`h-full  flex flex-col justify-between`}>
              <ClientNavbar />
              {children}

              <ClientFooter />
          </div>
        </div>
    );
};

export default Client;
