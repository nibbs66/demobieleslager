import React from 'react';
import { Popover } from '@headlessui/react'
import {Bars3Icon} from "@heroicons/react/20/solid";
import {useSession, signOut} from "next-auth/react";
import Link from "next/link";
import {PhoneSolid} from "../Icons/Icon";
const ClientMobile = ({session}) => {

    return (
        <Popover className=" relative">
            <Popover.Button>
                <Bars3Icon className="h-6 w-6 text-white" />
            </Popover.Button>

            <Popover.Panel className="absolute z-10 -right-2">
                <div className=" gap-4 text-white  text-sm">
                    <div className="relative grid gap-4 bg-black/60 rounded-md py-5 px-4 lg:grid-cols-1">
                        <Link href="/admin" className={`${!session?.token?.isAdmin && 'hidden'}`}>Admin</Link>
                        <a href="https://www.facebook.com/profile.php?id=100065041837312">Facebook</a>
                        <a href="https://www.whatsapp.com">WhatsApp</a>


                    </div>

                </div>


            </Popover.Panel>
        </Popover>
    );
};

export default ClientMobile;
