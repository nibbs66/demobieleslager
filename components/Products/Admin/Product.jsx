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
import { Switch } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import {ImagePlaceHolder} from '../../Icons/Icon'
import { UserIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import Card from '../../Cards/Card'
import Toggle from '../../Inputs/Toggle'
import {label} from "../../../utils/helpers";
import {useRouter} from "next/router";
import SelectCategory from '../../Forms/SelectCategory';
import SelectPerValue from '../../Forms/SelectPerValue';
import {FlatPill} from '../../VisualHelpers/Badges';
import Modal from "../../Modal/Modal";
import useUploadImage from "../../../hooks/useUploadImage";

export default function Product({ product, page, order, category }) {

    const formData = useRef(null)
    const [enabled, setEnabled] = useState({ inStock: product.inStock, Aanbiedingen: product?.Aanbiedingen })
    const [select, setSelect] = useState(product.categories)
    const [open, setOpen] = useState(false)
    const [per, setPer] = useState({name: product.per})
    const [picture, setPicture] = useUploadImage('')
    const message = `${product.title} is succesvol bijgewerkt. U kunt de wijzigingen op uw website bekijken`
const router = useRouter()
    const {query} = router

    const handleUpdate = async (e) => {
        e.preventDefault()
        const {title, price} = formData.current

        const data = {
            title: title.value || product.title,
            price: price.value || product.price,
            categories: select,
            per: per.name,
            inStock: enabled.inStock,
            Aanbiedingen: enabled.Aanbiedingen,
        }
        try {
            const res = await fetch(`/api/products/${product.id}`, {
                    method: "PUT",
                body: JSON.stringify({ ...data, ...(!!picture.length) ? {img: picture, ...data} : {...data}}),

                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if(res.ok) {
                setOpen(true)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Modal  show={open} title={'Productupdate succes'} message={message} closeModal={()=> {
                setOpen(false)
                router.push(`/admin/producten?page=${page}&category=${category}&order=${order}`)
            }} setOpen={setOpen} />

            <div className={`py-10 sm:px-10`}>
                <Card header title={label(product.title)}>
                   <div>
                      <div className={`relative flex px-6 justify-end`}>
                          <Link href={`/admin/producten?page=${page}&category=${category}&order=${order}`} className={`absolute -top-10 px-2 py-1 text-sm rounded bg-blue-500 hover:bg-blue-400 text-white`}>
                              <div className={`space-x-2`}>
                                  <span>&larr;</span>
                                  <span>Terug</span>
                              </div>
                          </Link>
                      </div>
                       <form ref={formData}
                           className="divide-y divide-gray-200 lg:col-span-9"

                       >
                           {/* Profile section */}
                           <div className="px-4 py-6 sm:p-6 lg:pb-8">
                               <div>

                                   <p className="mt-1 text-sm text-gray-500">
                                       Product Informatie.
                                   </p>
                               </div>

                               <div className="mt-6 flex flex-col lg:flex-row">
                                   <div className="flex-grow space-y-6">
                                       <div className={`grid grid-cols-8 gap-6 sm:pr-10`}>
                                           <div className="col-span-8 sm:col-span-5">
                                               <label
                                                   htmlFor="title"
                                                   className="block text-sm font-medium leading-6 text-gray-900"
                                               >
                                                   Naam
                                               </label>
                                               <input
                                                   type="text"
                                                   name="title"
                                                   id="title"
                                                   placeholder={label(product.title)}
                                                   autoComplete="title"
                                                   className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-gray-700 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                               />
                                           </div>
                                           <div className="col-span-8 sm:col-span-5">
                                               <label
                                                   htmlFor="price"
                                                   className="block text-sm font-medium leading-6 text-gray-900"
                                               >
                                                   Prijs
                                               </label>
                                               <input
                                                   type="number"
                                                   name="price"
                                                   id="price"
                                                   placeholder={'€'+Number(product.price).toFixed(2)}
                                                   autoComplete="price"
                                                   className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-gray-700 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                               />

                                           </div>
                                           <div className="col-span-8 sm:col-span-5">
                                               <label
                                                   htmlFor="email"
                                                   className="block text-sm font-medium leading-6 text-gray-900"
                                               >
                                                   Per
                                               </label>

                                               <div className="mt-2">
                                                   <SelectPerValue
                                                       defaultValue={product.per}
                                                       select={per}
                                                       setSelect={setPer}
                                                   />


                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
                                       <p
                                           className="text-sm font-medium leading-6 text-gray-900"
                                           aria-hidden="true"
                                       >
                                           Photo
                                       </p>
                                       <div className="mt-2 lg:hidden">
                                           <div className="flex items-center">
                                               <div
                                                   className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                                                   aria-hidden="true"
                                               >
                                                   {product.img ? (
                                                       <img
                                                           className="h-full w-full rounded-full"
                                                           src={product.img}
                                                           alt=""
                                                       />
                                                   ) : (
                                                       <div role="status" className="flex items-center justify-center h-56 w-full bg-gray-300 rounded-lg  ">
                                                           <UserIcon className="h-12 w-auto rounded-full border border-gray-300 text-nether-600" />
                                                       </div>
                                                   )}
                                               </div>
                                               <div className="relative ml-5">
                                                   <input
                                                       id="mobile-product-photo"
                                                       name="product-photo"
                                                       type="file"
                                                       className="peer absolute h-full w-full rounded-md opacity-0"
                                                   />
                                                   <label
                                                       htmlFor="mobile-product-photo"
                                                       className="pointer-events-none block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                                                   >
                                                       <span>Change</span>
                                                       <span className="sr-only"> product photo</span>
                                                   </label>
                                               </div>
                                           </div>
                                       </div>

                                       <div className="relative hidden overflow-hidden lg:block">
                                           {product.img ? (
                                               <img
                                                   className="h-56 w-56 object-contain"
                                                   src={product.img}
                                                   alt=""
                                               />
                                           ) : (
                                               <div role="status" className="flex items-center justify-center h-56 w-56 bg-gray-300 rounded-lg  ">
                                                   <ImagePlaceHolder className={`w-auto h-10 text-gray-200 dark:text-gray-600`}/>
                                               </div>
                                           )}
                                           <label
                                               htmlFor="desktop-product-photo"
                                               className="absolute inset-0 flex h-full w-full items-center justify-center bg-black/70 rounded-lg bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                                           >
                                               <span>Change</span>
                                               <span className="sr-only"> product photo</span>
                                               <input
                                                   type="file"
                                                   id="desktop-product-photo"
                                                   name="product-photo"
                                                   className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                               />
                                           </label>
                                       </div>
                                   </div>
                               </div>

                               <div className="mt-6 grid grid-cols-12 gap-6">
                                   <div className="col-span-12 sm:col-span-6">
                                       <label
                                           htmlFor="phone"
                                           className="block text-sm font-medium leading-6 text-gray-900"
                                       >
                                           Categories
                                       </label>
                                       <div >
                                           <SelectCategory
                                               select={select}
                                               setSelect={setSelect}
                                           />

                                       </div>
                                       <div className={`${select.length < 1 && 'invisible'} mt-1 space-x-2`}>
                                           {select.map((item, idx) => (
                                               <FlatPill key={idx} text={item} textColor={`text-green-700`} bg={`bg-green-200`} px={`px-2`}  />
                                           ))}

                                       </div>


                                   </div>



                               </div>
                           </div>

                           {/* Privacy section */}
                           <div className="divide-y divide-gray-200 pt-6">
                               <div className="px-4 sm:px-6">

                                   <ul role="list" className="mt-2 divide-y divide-gray-200 col-span-full">
                                       <Switch.Group as="li" className="flex items-center justify-between py-4">
                                           <div className="flex flex-col">
                                               <Switch.Label as="p" className="text-sm font-medium leading-6 text-gray-900" passive>
                                                   Stock
                                               </Switch.Label>
                                               <Switch.Description className="text-sm text-gray-500">

                                               </Switch.Description>
                                           </div>
                                           <Toggle
                                               name={`inStock`}
                                               defaultChecked={product.inStock}
                                               enabled={enabled.inStock}
                                               setEnabled={() =>
                                                   setEnabled((prev) => ({ ...prev, inStock: !prev.inStock }))
                                               }
                                           />

                                       </Switch.Group>
                                       <Switch.Group as="li" className="flex items-center justify-between py-4">
                                           <div className="flex flex-col">
                                               <Switch.Label as="p" className="text-sm font-medium leading-6 text-gray-900" passive>
                                                   Aanbiedingen
                                               </Switch.Label>
                                               <Switch.Description className="text-sm text-gray-500">

                                               </Switch.Description>
                                           </div>
                                           <Toggle
                                               name={`Aanbiedingen`}
                                               defaultChecked={product.inStock}
                                               enabled={enabled.Aanbiedingen}
                                               setEnabled={() =>
                                                   setEnabled((prev) => ({ ...prev, Aanbiedingen: !prev.Aanbiedingen }))
                                               }
                                           />

                                       </Switch.Group>

                                   </ul>
                               </div>
                               <div className="mt-4 flex justify-end gap-x-3 px-4 py-4 sm:px-6">
                                   <button

                                       type="button"
                                       className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                   >
                                       Annuleren
                                   </button>
                                   <button
                                       onClick={handleUpdate}
                                       type="button"
                                       className="inline-flex justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                                   >
                                       Save
                                   </button>
                               </div>
                           </div>
                       </form>
                   </div>
                </Card>
            </div>
        </>
    )
}
