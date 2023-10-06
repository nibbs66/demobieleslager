import React from 'react';
import Link from "next/link";
import { EnvelopeIcon } from '@heroicons/react/24/outline'
const ClientFooter = () => {
    return (
        <footer className={`relative max-w-screen-2xl  flex justify-center py-12 px-4 `}>
            <div className="fixed sm:absolute bottom-0 sm:bottom-1  w-full max-w-7xl text-sm md:text-base sm:rounded-2xl bg-black/50 md:bg-black/30 text-center backdrop-blur-lg px-6 text-white py-5 md:flex md:items-center md:justify-between  lg:px-8">
               <div>
                   KvK: 06-41280374
               </div>
               <div>
                   40-50 BredasewegChaam, NL
                   mobiele@gmail.com
                   06-41280374
               </div>
               <div className={`cursor-pointer`}>
                  <Link href={`/contact`} className={`sm:flex text-center sm:items-center sm:hover:bg-black/50  sm:hover:border-black sm:px-4 sm:py-1 sm:border sm:rounded sm:space-x-2`}>
                      <EnvelopeIcon className={`hidden sm:block h-6 w-6 text-white`} />
                   <span> Contact</span>
                  </Link>
               </div>

           </div>
        </footer>
    );
};

export default ClientFooter;
