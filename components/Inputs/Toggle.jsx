import { useState } from 'react'

import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle({ label, enabled, setEnabled, span }) {
  return (
    <div className={`col-span-${span}`}>
      <div className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled
            ? 'bg-blue-600/60'
            : 'bg-gray-200 ease-in-out  hover:bg-gray-300 hover:transition-colors hover:duration-500',
          'group relative inline-flex h-4 w-9 flex-shrink-0 cursor-pointer accent rounded-md border-2 border-transparent transition-colors duration-1000 ease-in-out focus:outline-none md:h-6 md:w-11 '
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? 'translate-x-5  ' : 'translate-x-0 ',
            'pointer-events-none  relative inline-block h-3 w-3 transform rounded-md bg-white shadow ring-0 transition duration-1000 ease-in-out md:h-5 md:w-5'
          )}
        >
          <span
            className={classNames(
              enabled
                ? 'opacity-0 duration-1000 ease-out'
                : 'opacity-100 duration-1000 ease-in',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity group-hover:after:translate-x-1'
            )}
            aria-hidden="true"
          >
            <svg
              className="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={classNames(
              enabled
                ? 'opacity-100 duration-1000 ease-in'
                : 'opacity-0 duration-1000 ease-out',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4 text-blue-600"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1
              1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                strokeWidth={1}
              />
            </svg>
          </span>
        </span>
      </Switch>
    </div>
  )
}
