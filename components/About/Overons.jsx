/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import logo from '../../public/img/slager_logo.png'
import Image from "next/image";
import Link from "next/link";



export default function Overons() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>


            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden ">

                   <div className={`w-full mx-auto flex justify-between`}>
                       <div className="mx-auto f max-w-7xl px-6 py-5 sm:py-10 lg:px-8">
                           <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-5 xl:grid-rows-1 xl:gap-x-0">
                               <div className={`col-span-2 pl-5`}>
                                   <h1 className="max-w-2xl text-xl mb-10 font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto whitespace-nowrap">
                                       Jouw slager in Chaam.
                                   </h1>
                                   <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                       <p className="leading-8 text-gray-700">

                                           Omdat er in Chaam geen fatsoenlijk stukje vlees te verkrijgen is ben ik daarin voor mezelf begonnen.
                                           Ik ben slager van beroep met ruim 30 jaar ervaring.
                                           Ik maak ook heerlijke ambachtelijke soepen,kant en klare kipsaté en kant en klare hachee 😋<br/>

                                           Ook voor al uw BBQ vlees/vis kunt u bij mij terecht.
                                           Van gemarineerde speklapjes tot scampi&apos;s.
                                           Van kipsaté tot hamburgers.
                                           Van biefstuk spiesen tot zalm spiesen.
                                           Van varkenshaas spiesen tot Caribische kipsnitzels.
                                           Van oosterse kipdijen tot varkensfilet chilly.
                                           Ook voor de grote stukken vlees zoals;

                                           Kortom,u kunt ALLES bestellen bij mij !

                                       </p>
                                   </div>
                                  <div className={`flex justify-center pt-5`}>
                                      <Link href={`/contact`} className={`px-4 py-2 bg-black/50 hover:bg-black/60 text-white rounded flex items-center space-x-2`}>
                                          <EnvelopeIcon className={`h-5 w-5 `}/>
                                         <span>Contact</span>
                                      </Link>
                                  </div>
                               </div>
                               <div className={` col-span-2 col-start-4`}>
                                   <Image src={logo} alt={'logo'} width={400} height={400}
                                          className=" mt-4 aspect-[6/5] w-full max-w-lg rounded-2xl object-contain sm:mt-16 lg:mt-0 lg:max-w-xl xl:row-span-2 xl:row-end-2 "

                                   />


                               </div>
                           </div>
                       </div>
                   </div>

                </div>
            </main>

            {/* Footer */}

        </div>
    )
}
