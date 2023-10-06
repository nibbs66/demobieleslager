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
export default function GenericInput({ label, placeholder, width, onChange }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="text-monkebyte-800 block text-sm font-medium leading-6"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          autoFocus={true}
          onChange={(e) => onChange(e.target.value)}
          type="email"
          name="email"
          id="email"
          className={` ${width} block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
