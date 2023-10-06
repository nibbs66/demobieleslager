

export function BorderBadge({ color, text }) {
  return (
    <>
      <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        {text}
      </span>
      <span className="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        {text}
      </span>
    </>
  )
}
export function SpecialBadge({ color, text, onClick }) {
  //                 className="  bg-transparent flex justify-center hover:bg-emerald-500 hover:text-white py-1 px-2 border-0 hover:rounded  text-emerald-500 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100 rounded-sm"
  return (
    <>
      {color === 'gray' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-emerald-500 no-underline  transition duration-100  hover:bg-emerald-500 hover:text-white"
        >
          {text}
        </span>
      ) : color === 'red' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-red-500 no-underline  transition duration-100  hover:bg-red-500 hover:text-white"
        >
          {text}
        </span>
      ) : color === 'yellow' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-yellow-500 no-underline  transition duration-100  hover:bg-yellow-500 hover:text-white"
        >
          {text}
        </span>
      ) : color === 'green' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-green-500 no-underline  transition duration-100  hover:bg-green-500 hover:text-white"
        >
          {text}
        </span>
      ) : color === 'blue' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-blue-500 no-underline  transition duration-100  hover:bg-blue-500 hover:text-white"
        >
          {text}
        </span>
      ) : color === 'indigo' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-indigo-500 no-underline  transition duration-100  hover:bg-indigo-500 hover:text-white"
        >
          {text}
        </span>
      ) : color === 'purple' ? (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-purple-500 no-underline  transition duration-100  hover:bg-purple-500 hover:text-white"
        >
          {text}
        </span>
      ) : (
        <span
          onClick={onClick}
          className="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-pink-500 no-underline  transition duration-100  hover:bg-pink-500 hover:text-white"
        >
          {text}
        </span>
      )}
    </>
  )
}

export function FlatBadge({
  bg,
  uppercase,
  text,
  px,
  textColor,
  onClick,
  active,
}) {
  return (
    <>
      <span
        onClick={onClick}
        className={`${
          uppercase && 'uppercase'
        } inline-flex items-center rounded-md ${bg} cursor-pointer ${px} py-1 text-xs font-medium ${textColor}`}
      >
        {text}
      </span>
    </>
  )
}
export function ActionBadge({ color, text, bg, textColor }) {
  return (
    <>
      <span
        className={`inline-flex items-center justify-between gap-x-0.5 rounded-md ${bg} px-2 py-1 text-xs font-medium ${textColor}`}
      >
        {text}
        <button
          type="button"
          className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
        >
          <span className="sr-only">Remove</span>
          <svg
            viewBox="0 0 14 14"
            className="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75"
          >
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      </span>
    </>
  )
}
export function FlatWithDot({ img, text, bg, textColor, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-x-1.5 rounded-md ${bg} px-2 py-1 text-xs font-medium ${textColor}`}
      >
        {img && (
          <img src={img} alt="user" className="h-4 w-4 rounded-full" />
        )}

        {text}
      </button>
    </>
  )
}
export function FlatPill({ img, text, bg, textColor, onClick, px }) {
  return (
    <>
      <span
        onClick={onClick}
        className={`inline-flex cursor-pointer items-center rounded-full ${bg} ${px} py-1 text-xs font-medium ${textColor}`}
      >
        {text}
      </span>
    </>
  )
}
