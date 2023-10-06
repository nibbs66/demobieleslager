
import Link from "next/link";
import {useState} from "react";
import ProductDisplay from "./ProductDisplay";
import {label} from "../../utils/helpers";
import Pagination from "../Tables/Pagination/Pagination";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductList({id, products, count, title,  page}) {

    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState({})
    return (
        <div className={`mx-auto w-screen max-w-7xl`}>
            <div className={`bg-white/30 backdrop-blur-lg  rounded-md`}>
            <ProductDisplay open={open} setOpen={setOpen} id={id} item={product}/>
               <div className="px-12 flex justify-between items-center">
                   <span className={`title pt-4 md:pt-8 md:text-2xl text-white`}> {title}</span>
                     <Link href={`/slager`}>
                         <span className={`title pt-4 md:pt-8 md:text-2xl text-white flex items-center space-x-2`}>
                   <ArrowLeftIcon className={` h-8 w-8 text-white`} />
                       <span>Terug</span>
                   </span>
                     </Link>
               </div>
            <ul role="list" className="mt-3 py-10 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {products.map((product, idx) => (
                    <li
                        onClick={() => {
                            setOpen(true)
                            setProduct(product)
                        }}
                        key={product.id} className="col-span-1   cursor-pointer flex justify-center rounded-md shadow-sm">

                            <div className="flex items-center px-2 box-content w-44 h-auto  text-center truncate rounded-md border-b border-r border-t border-gray-200 bg-white">
                                <div className="flex-1 truncate  py-2 text-sm">
                                <span className="font-medium   text-gray-900 hover:text-gray-600 truncate">
                                    {label(product?.title)}
                                </span>
                                    <p className="text-gray-500">€{Number(product?.price)?.toFixed(2)+ ' per ' + product?.per}</p>
                                    {product?.Aanbiedingen && <p className="font-semibold text-blue-700">**Aanbiedingen**</p>}
                                </div>

                            </div>



                    </li>
                ))}
            </ul>
                <div className={`mt-5 h-full rounded-b-md bg-white/80 pb-10`}>
                    <div>
                        <Pagination
                            count={count}
                            items={products?.length}
                            page={page}
                            view={`${id}`}
                            events={8}
                        />
                    </div>
                </div>
        </div>

        </div>
    )
}
