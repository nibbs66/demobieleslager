import React from 'react';
import {PhoneSolid, PhoneOutline, WhatsApp, Facebook} from "../Icons/Icon";
import logo from '../../public/img/slager_logo.png'
import {useSession} from "next-auth/react";

//output-onlinejpgtools.png
import Image from "next/image";
import Link from "next/link";
import AdminMobile from "./AdminMobile";
import ClientMobile from "./ClientMobile";
const ClientNavbar = () => {
    const {data: session, status} = useSession()
//https://www.facebook.com/profile.php?id=100065041837312
    return (
        <header className=" md:pt-4 sm:px-5 xl-px-0 pb-10">
            <nav
                className={`mx-auto flex  max-w-7xl px-5  items-center justify-between bg-transparent   shadow-2xl shadow-white/50 md:rounded-2xl  md:bg-white/30 backdrop-blur-sm lg:px-8 lg:py-2`}
                aria-label="Global"
            >
              <div className={`flex items-center gap-4`}>
                 <Link href={`/`} className={`p-4 sm:p-0`}>
                     <Image src={logo} alt={`logo`} width={60} height={60} className={`bg-white/30 backdrop-blur-sm p-2 rounded`}/>
                 </Link>

                  <h1 className={`title text-white text-sm md:text-2xl tracking-wider`}>De Mobiele Slager</h1>
              </div>
                <div className={`hidden sm:flex  items-center space-x-4`}>
                    <Link href={`/admin`}
                          className={`${!session?.token?.isAdmin && 'hidden'} px-2 py-1 rounded-md border border-white text-white text-sm`}
                    >
                        Admin
                    </Link>
                    <div className={`flex flex-col items-center justify-center sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0`}>
                        <div className="tooltip  tooltip-bottom" data-tip="Telefoon: 06-41280374">
                            <PhoneSolid className={`text-white h-4 sm:h-6 cursor-pointer`}/>
                        </div>
                        <div className="tooltip  tooltip-bottom" data-tip="Facebook">
                            <a href="https://www.facebook.com/profile.php?id=100065041837312">
                                <Facebook className={`text-white h-4 sm:h-6 cursor-pointer`}/>
                            </a>
                        </div>
                        <div className="tooltip  tooltip-bottom" data-tip="WhatsApp">
                            <a href="https://www.whatsapp.com">
                                <WhatsApp className={`text-white h-4 sm:h-6 cursor-pointer`}/>
                            </a>

                        </div>
                    </div>

                </div>
                <div className={`sm:hidden`}>
                    <ClientMobile session={session}/>

                </div>

            </nav>

        </header>
    );
};

export default ClientNavbar;
