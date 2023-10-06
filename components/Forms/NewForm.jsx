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
import { Fragment, useState, useRef } from 'react'
import { Dialog, Transition, Switch } from '@headlessui/react'
import {
    ChartBarSquareIcon,
    Cog6ToothIcon,
    FolderIcon,
    GlobeAltIcon,
    ServerIcon,
    SignalIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import SearchableCombobox from "../Inputs/SearchableCombobox";
import {filteredSearch} from "../../utils/helpers";
import SelectCategory from "./SelectCategory";
import SelectPerValue from "./SelectPerValue";
import Toggle from "../Inputs/Toggle";
import Modal from "../Modal/Modal";
import {FlatPill} from "../VisualHelpers/Badges";
import FileUpload from "./FileUpload";
import {imageHelper} from "../../utils/imageHelper";
import useUploadImage    from '../../hooks/useUploadImage'
export default function NewForm() {

    const [preview, setPreview] = useState([])
    const [pic, setPic] = useState('')
    const [enabled, setEnabled] = useState({ inStock: false, Aanbiedingen: false })

    const [select, setSelect] = useState([])
    const [open, setOpen] = useState(false)

        const [picture, setPicture] = useUploadImage('')
    const [per, setPer] = useState(null)
const inputRef= useRef(null)
const message = 'Nieuw product succesvol toegevoegd aan uw database. Je kunt het nu op de website bezoeken.'

    const handleSubmit = async(e) => {
        e.preventDefault()

   const {title, price} = inputRef.current

           const data = {
            title: title.value,
            price: price.value,
            categories: select,
            per: per.name,
            inStock: enabled.inStock,
            Aanbiedingen: enabled.Aanbiedingen,
        }
        try {
          const res = await fetch(`/api/products`, {
                  method: "POST",
                  body: JSON.stringify({ ...data, ...(!!picture.length) ? {img: picture, ...data} : {...data}}),

                  headers: {
                      "Content-Type": "application/json",
                  },
              }
          );
         if(res.ok) {
              setOpen(true)
             setSelect([])
             setPicture('')
              inputRef.current.reset()
         }
      } catch (error) {
          console.log(error)
      }
    }

    return (
        <div className={`relative`}>
                    <Modal  show={open} title={'Nieuw producten succes'} message={message} closeModal={()=>setOpen(false)} setOpen={setOpen} />

                    <main>


                        {/* Settings forms */}
                        <div className="divide-y divide-gray-700/5">
                            <div className="grid max-w-7xl grid-cols-1 gap-x-8 md:gap-y-10 px-4 py-5  xl:py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                                <div>
                                    <h2 className="text-base font-semibold leading-7 text-gray-700">Nieuw producten</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-500">

                                    </p>
                                </div>

                                <form ref={inputRef} className="md:col-span-2">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:max-w-xl sm:grid-cols-6">
                                        <FileUpload  preview={preview} setPreview={setPreview} setPicture={setPicture} />
                                        <div className="sm:col-span-6">
                                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-700">
                                                Product Naam
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    autoComplete="title"
                                                    className="block w-full pl-3 rounded-md border-0 bg-white/5 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-700">
                                               Price
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    autoComplete="price"
                                                    className="block w-full pl-3 rounded-md border-0 bg-white/5 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="per" className="block text-sm font-medium leading-6 text-gray-700">
                                               Per
                                            </label>
                                            <div className="mt-2">
                                                <SelectPerValue
                                                    select={per}
                                                    setSelect={setPer}
                                                />


                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <div className={`grid gap-2`}>
                                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-700">
                                                    Category
                                                </label>

                                                <div >
                                                        <SelectCategory
                                                        select={select}
                                                        setSelect={setSelect}
                                                    />

                                                </div>
                                                <div className={`${select.length < 1 && 'invisible'} space-x-2`}>
                                                    {select.map((item, idx) => (
                                                        <FlatPill key={idx} text={item} textColor={`text-green-700`} bg={`bg-green-200`} px={`px-2`}  />
                                                    ))}

                                                </div>

                                            </div>
                                        </div>

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
                                                    enabled={enabled.Aanbiedingen}
                                                    setEnabled={() =>
                                                        setEnabled((prev) => ({ ...prev, Aanbiedingen: !prev.Aanbiedingen }))
                                                    }
                                                />

                                            </Switch.Group>

                                        </ul>
                                    </div>
                                    <div className="mt-8 flex">
                                        <button
                                            onClick={handleSubmit}
                                            type="button"
                                            className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500/80"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>






                        </div>
                    </main>
                </div>


    )
}
