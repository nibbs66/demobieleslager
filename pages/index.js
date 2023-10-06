import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MetaHead from "../components/MetaHead";
import Client from "../components/layout/Client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home() {
    const { data: session } = useSession()


  return (
    <div className={`mx-auto   max-w-7xl`}>
        <MetaHead title={'De Mobiele Slager'} name={'De Mobiele Slager'} description={'Beste Slager Nederland Chaam'}/>
        <div className={`flex flex-col sm:flex-row h-[calc(100vh-20rem)] w-screen max-w-7xl  items-center justify-around text-white`}>

            <Link href={`/slager`}
                className={`title px-8 py-4 bg-black/50 rounded-md text-xl`}>
                Assortiment
            </Link>
            <Link href={`/aanbiedingen?page=1`} className={`title px-8 py-4 bg-black/50 rounded-md text-xl`}>Aanbiedingen
            </Link>
            <Link href={`/overons`} className={`title px-8 py-4 bg-black/50 rounded-md text-xl`}>
                Over Ons
            </Link>
        </div>


    </div>
  )
}
Home.getLayout = function getLayout(page){
    return(
        <Client>
            {page}
        </Client>
    )
}
