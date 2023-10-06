import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

const DashboardBar = () => {
    const {data: session, status} = useSession()

    return (
        <header className={` sm:px-5 xl-px-0 pb-10 xl:pb-0`}>
            <nav
                className={` mx-auto flex  max-w-7xl  items-center justify-around lg:px-8 lg:py-2`}
                aria-label="Global"
            >
                 <Link  href={session?.token?.isAdmin  ? `/admin/producten?page=1&category=title&order=asc` : '/admin'} className={`${!session?.token?.isAdmin  && 'invisible'} px-6 py-2 shadow-2xl shadow-sky-700 bg-black/50 text-white rounded-md`}>
                    Producten
                </Link>
                   <Link href={session?.token?.isAdmin  ? `/admin/berichten?page=1`  : '/admin'} className={`${!session?.token?.isAdmin  && 'invisible'} px-6 py-2 shadow-sky-700 shadow-2xl bg-black/50 text-white rounded-md`}>
                    Berichten
                </Link>

            </nav>

        </header>
    );
};

export default DashboardBar;
