import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid'

import Link from "next/link";
import {useRouter} from "next/router";

import { usePagination } from './usePagination'
import { useState } from 'react'

export const dotts = '...'
const EVENTS_PER_PAGE = 4
const Pagination = ({
  currentPage,
  onPageChange,
  count,
  page,
  name,
  events,
  tab,
  sort,

  items,
  view,
}) => {
    const router = useRouter()
    const {query} = router
    const {category, order} = query


  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  const handleNext = (data) => {
    const loadPage = Number(page) + data
      setCurrentPageNumber(loadPage)
      router.push(`/${view}?page=${loadPage}&category=${category}&order=${order} `)
    //navigate(routes[view]({ name, tab, page: loadPage, sort, order }))
  }
  const paginationRange = usePagination({
    count,
    events,
    page: currentPageNumber,
  })

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 pt-4 sm:px-10">
      <div
        className={`${
          Number(page) === 1 && 'invisible transition duration-700'
        } -mt-px flex w-0 flex-1`}
      >
        <span
          onClick={() => handleNext(-1)}
          className="inline-flex cursor-pointer items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-700"
            aria-hidden="true"
          />
          Vorige
        </span>
      </div>

      <div className="hidden md:-mt-px md:flex">
        {paginationRange &&
          paginationRange?.map((pageNumber, idx) =>
            pageNumber === dotts ? (
              <span
                key={idx}
                className="inline-flex items-center border-t-2 border-transparent px-4  text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
              >
                {pageNumber}
              </span>
            ) : (
              <Link href={`/${view}?page=${pageNumber}&category=${category}&order=${order}`}
                key={idx}
              >
                <span
                  onClick={() => setCurrentPageNumber(pageNumber)}
                  key={idx}
                  className={`inline-flex items-center  px-4 pt-2 text-sm font-medium ${
                    pageNumber === Number(page)
                      ? '  border-t border-nether-600 text-nether-600'
                      : 'text-gray-700 hover:border-gray-300 hover:text-gray-700'
                  } cursor-pointer`}
                >
                  {pageNumber}
                </span>
              </Link>
            )
          )}
      </div>
      <div
        className={`${
          Number(page) === Math.ceil(count / events)
            ? 'invisible transition duration-700'
            : items < events
            ? 'invisible transition duration-700'
            : ''
        } -mt-px flex w-0 flex-1 justify-end`}
      >
        <span
          onClick={() => handleNext(1)}
          className="inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-700"
        >
          Volgende
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-700"
            aria-hidden="true"
          />
        </span>
      </div>
    </nav>
  )
}
export default Pagination
// <Link to={routes.tenantadmin({ name, page: i + 1 })}>{i + 1}</Link>
