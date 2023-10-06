import React from 'react'

import { PlusIcon } from '@heroicons/react/20/solid'

import Link from "next/link";

export default function Card({
  children,
  header,
  title,
  addLink,
  buttonLink,
  buttonLabel,
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-lg shadow-sky-700">
      <div className="px-4 py-5 sm:p-6">
        <div className={`flex items-center justify-between pb-5`}>
          {header && (
            <h2 className={` px-2 text-nether-700 sm:px-12 sm:text-xl`}>
              {title}
            </h2>
          )}
          {addLink && (
            <Link
              href={routes[buttonLink]()}
              className={`group relative rounded-md bg-nether-600 px-4 py-1 text-sm uppercase text-white transition duration-700 hover:bg-nether-500/80 hover:text-white hover:duration-500 `}
            >
              <div className={`flex items-center justify-center space-x-1`}>
                <PlusIcon
                  className={`h-4 w-4 text-white group-hover:text-white`}
                />
                <span>{buttonLabel}</span>
              </div>
            </Link>
          )}
        </div>

        {children}
      </div>
    </div>
  )
}
// background: 'bg-gradient-to-br from-emerald-600 to-emerald-900',
/* <div className={`relative-isolate h-64`}>
        <div className=" absolute inset-0  overflow-hidden rounded-lg bg-white shadow-lg shadow-nether-300">
          <div className="absolute left-16  -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
            <div
              className={`aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-emerald-600 to-emerald-900 `}
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
            />*/
