/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import Link from "next/link";
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import steak from '../../public/img/steak2.jpeg'
import Image from "next/image";

const products1 = [
    {
        id: 1,
        name: 'Vlees',
        href: '#',
        price: '$13',
        description: '3 sizes available',
        imageSrc: "https://images.unsplash.com/photo-1608877906884-5ffef2ef9612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2",
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Kip',
        href: '#',
        price: '$64',
        description: 'Walnut',
        imageSrc: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2tlbiUyMG1lYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 3,
        name: 'BBQ',
        href: '#',
        price: '$32',
        description: 'Heather Gray',
        imageSrc: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJicXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        id: 8,
        name: 'Diversen',
        href: '#',
        price: '$165',
        description: 'Black',
        imageSrc: 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        imageAlt:
            'Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.',
    },
    // More products...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategoryPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div >
            <div>
                {/* Mobile filter dialog */}

                <main>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        {/* Filters */}

                        {/* Product grid */}
                        <section aria-labelledby="products-heading" className="mt-8 pb-10">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {products1.map((product) => (
                                    <Link key={product.id} href={`/slager/${product.name}?page=1`} className="group">
                                        <div className="h-80 w-auto  overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className=" object-contain object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <div className="mt-4 py-5 flex items-center justify-center text-base text-xl font-medium text-white">
                                            <h3>{product.name}</h3>

                                        </div>
                                        {/*<p className="mt-1 text-sm italic text-gray-500">{product.description}</p>*/}
                                    </Link>
                                ))}
                            </div>
                        </section>



                    </div>
                </main>


            </div>
        </div>
    )
}
