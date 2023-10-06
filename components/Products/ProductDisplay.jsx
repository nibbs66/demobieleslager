/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import {label} from "../../utils/helpers";
import {ImagePlaceHolder} from "../Icons/Icon";

const product = {
    name: 'Zip Tote Basket',
    price: '$220',
    rating: 3.9,
    href: '#',
    description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
    imageAlt: 'Back angled view with bag open and handles to the side.',
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDisplay({open, setOpen, item, id}) {

    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center md:items-center md:px-2 lg:px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        >
                            <Dialog.Panel className="flex w-full justify-center transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">



                                    <div className="relative flex justify-center card w-96  bg-base-100 shadow-xl">
                                        <button
                                            type="button"
                                            className="absolute right-2 top-2 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-0 md:top-6 lg:right-2 lg:top-1"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                        <figure className="px-10 pt-10">
                                            {item.img ? <img src={item.img} alt="food" className="rounded-xl aspect-square "/>
                                            :
                                                <div role="status" className="flex items-center justify-center h-56 w-full bg-gray-300 rounded-lg  dark:bg-gray-700">
                                                  <ImagePlaceHolder className={`w-10 h-10 text-gray-200 dark:text-gray-600`}/>
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            {item.title &&<h2 className="card-title">{label(item?.title)}</h2>}
                                            <p className="text-gray-500">€{Number(item?.price)?.toFixed(2)+ ' per ' + item?.per}</p>

                                            {item?.Aanbiedingen && <p className="font-semibold text-blue-700">**Aanbiedingen**</p>}
                                            <div>
                                                <button
                                                    onClick={() => setOpen(false)}
                                                    className="bg-blue-600 hover:bg-blue-400 px-6 py-1 rounded-md text-white transition duration-700 hover:duration-500">
                                                    <div className={`space-x-2`}>
                                                        <span>&larr;</span>
                                                        <span>Terug</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
/*  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                        <div className="sm:col-span-4 lg:col-span-5">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-8 lg:col-span-7">
                                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{item.name}</h2>

                                            <section aria-labelledby="information-heading" className="mt-3">
                                                <h3 id="information-heading" className="sr-only">
                                                    Product information
                                                </h3>

                                                <p className="text-2xl text-gray-900">{item.members}</p>


<div className="mt-3">
    <h4 className="sr-only">Reviews</h4>
    <div className="flex items-center">
        <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                    key={rating}
                    className={classNames(
                        product.rating > rating ? 'text-gray-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                />
            ))}
        </div>
        <p className="sr-only">{product.rating} out of 5 stars</p>
    </div>
</div>

<div className="mt-6">
    <h4 className="sr-only">Description</h4>

    <p className="text-sm text-gray-700">{product.description}</p>
</div>
</section>

<section aria-labelledby="options-heading" className="mt-6">
    <h3 id="options-heading" className="sr-only">
        Product options
    </h3>

    <form>

        <div>
            <h4 className="text-sm text-gray-600">Color</h4>

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                        <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                                classNames(
                                    color.selectedColor,
                                    active && checked ? 'ring ring-offset-1' : '',
                                    !active && checked ? 'ring-2' : '',
                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                )
                            }
                        >
                            <RadioGroup.Label as="span" className="sr-only">
                                {color.name}
                            </RadioGroup.Label>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    color.bgColor,
                                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                                )}
                            />
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>

        <div className="mt-6">
            <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
                Add to bag
            </button>
        </div>

        <p className="absolute left-4 top-4 text-center sm:static sm:mt-6">
            <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                View full details
            </a>
        </p>
    </form>
</section>
</div>
</div>*/
