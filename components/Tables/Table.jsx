import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/20/solid";
import {createColumns} from "./createColumns";
import {label, truncate} from "../../utils/helpers";
import Link from "next/link";
import {SpecialBadge} from "../VisualHelpers/Badges";
import Search from "../Inputs/Search";

import {useRouter} from "next/router";
import Modal from "../Modal/Modal";
import ConfirmDelete from "./ConfirmDelete";
import {useState} from "react";
export default function Table({data, columns, title, empty, onChange}) {
    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
   const router = useRouter()
    const {query} = router
    const {page, order, category} = query
    const sortOrder = (data) => {

    let sortOrder;
      if (order === 'asc'){
          sortOrder = 'desc'
        }else{
          sortOrder = 'asc'
        }
      if(data.sort === 'Name'){
          data.sort = 'title'
      } else if(data.sort === 'category'){
          data.sort = 'categories'
      }
      router.push(`/admin/${title.toLowerCase()}?page=${page}&category=${data.sort}&order=${sortOrder}`)


      }
    const handleDelete = async () => {

        const res =  await fetch(`/api/delete?id=${message}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'product'
            },
        } )
        if(res.ok){
            setSuccess(true)
            if(success === false) {
                window.location.reload()
            }

        }

    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-5">
            <Modal show={success} title={'Product verwijderd.'} message={'Product is definitief verwijderd uit de database.'} closeModal={()=>setSuccess(false)} />
            <ConfirmDelete show={show} title={'Verwijder product?'} message={'Wilt u het product verwijderen? Deze actie kan niet ongedaan gemaakt worden.'} onClick={handleDelete} closeModal={()=>setShow(false)} />
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">{title}</h1>
                    <p className="my-2 text-sm text-gray-700">

                    </p>
                    {/*<Search
                        className={` rounded-md w-fit border border-gray-400 px-2 py-1 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm`}
                        value={'query'}
                        onChange={onChange}
                        type={`text`}
                        placeholder={`Search...`}
                    />*/}
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link href={`/admin/new/${title.toLowerCase()}`}

                        className="block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add {title.toLowerCase()}
                    </Link>
                </div>
            </div>
            <div className="-mx-4 mt-8 sm:-mx-0">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                        {createColumns(columns, 1).map((column) => (
                            <th
                                key={column.id}
                                onClick={() => sortOrder(column)}
                                scope="col"
                                className={` px-3 py-3.5 text-left text-sm font-semibold text-gray-900  ${
                                    !column.viewAll && ' hidden  lg:table-cell'
                                }`}
                            >
          <span className={`flex cursor-pointer items-center`}>
            {truncate(column.name, 8)}
              <ChevronDownIcon
                  className={`ml-1 h-4 w-4 ${order === 'asc' && 'hidden'}`}
              />
            <ChevronUpIcon
                className={`ml-1 h-4 w-4 ${order === 'desc' && 'hidden'}`}
            />
          </span>
                            </th>
                        ))}


                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white ">
                    {data.length === 0 && (
                        <tr>
                            <td scope={`col`} className=" w-full flex items-center col-span-full whitespace-nowrap px-3 py-4 text-sm text-gray-500">{empty}</td>
                        </tr>
                    )}
                    {data.length > 0 &&
                        data.map((item) => (
                        <tr key={item.id}>
                            <td className="hidden whitespace-nowrap truncate py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sm:table-cell">
                                {truncate(item.id, 5)}
                            </td>
                            <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                                {truncate(label(item.title), 15)}
                            </td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                {item.categories[0]}
                            </td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">€{Number(item.price).toFixed(2)}</td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">per {item.per}</td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"> {item.inStock ? 'Ja' : 'Nee'}</td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"> {item.Aanbiedingen  ? 'Ja' : 'Nee'}</td>
                            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <nav className="flex h-4  flex-col items-end justify-center   space-x-2 pr-1 sm:flex-row sm:items-center">
                                    <Link href={`/admin/${title.toLowerCase()}/${item.id}?page=${page}&category=${category}&order=${order} `}

                                    >
                                        <SpecialBadge text={`view`} color={`gray`} />
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setShow(true)
                                            setMessage(item.id)
                                        }}


                                    >
                                        <SpecialBadge text={`delete`} color={`red`} />
                                    </button>
                                </nav>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
