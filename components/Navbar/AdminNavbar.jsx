import React from 'react';
import {PhoneSolid, PhoneOutline, WhatsApp, Facebook} from "../Icons/Icon";
import logo from '../../public/img/slager_logo.png'
import logo2 from '../../public/img/output-onlinejpgtools.png'

//output-onlinejpgtools.png
import Image from "next/image";
import Link from "next/link";
import {Steak} from "../Icons/Icon";
import {Bars3Icon} from "@heroicons/react/20/solid";
import {useSession, signOut} from "next-auth/react";
import AdminMobile from "./AdminMobile";
const ClientNavbar = () => {
    const {data: session, status} = useSession()

    return (
        <header className=" md:pt-4 sm:px-5 xl-px-0 pb-10">
            <nav
                className={`mx-auto flex  max-w-7xl px-5  items-center justify-between bg-transparent  shadow-2xl shadow-black/50 md:rounded-2xl  md:bg-black/40 backdrop-blur-sm lg:px-8 sm:py-2`}
                aria-label="Global"
            >
                <div className={`flex items-center md:gap-4`}>
                    <Link href={`/admin`} className={`p-4 sm:p-0`}>
                        <Image src={logo} alt={`logo`} width={60} height={60} className={`bg-white/50 backdrop-blur-sm p-2 rounded`}/>
                    </Link>

                    <h1 className={`title text-white whitespace-nowrap text-sm sm:text-xl lg:text-2xl tracking-wider`}>De Mobiele Slager</h1>
                </div>
                <div className={`${status === 'unauthenticated' && 'invisible' } hidden sm:flex flex-col items-center justify-center pr-4 sm:pr-0 sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0`}>
                  <Link href={`/`} className={`text-xs sm:text-sm border rounded px-1 md:px-2 py-1 text-white flex items-center gap-2 hover:bg-white/20`}>
                      <Steak className={` h-5 w-5 text-white`}/>
                     <span>Home</span>
                  </Link>
                    <Link href={`/admin/new/product`} className={`text-xs sm:text-sm border rounded px-1 md:px-2 py-1 text-white hover:bg-white/20`}>Nieuw</Link>
                    <button  onClick={()=>signOut()} className={`text-xs sm:text-sm border rounded px-1 md:px-2 py-1 text-white hover:bg-white/20`}>Uitloggen</button>
                </div>
                <div className={`sm:hidden`}>
                    <AdminMobile />

                </div>


            </nav>

        </header>
    );
};

export default ClientNavbar;
