import {useEffect, useRef} from 'react';
import {CheckIcon} from "@heroicons/react/20/solid";

const Modal = ({show, closeModal, title, message}) => {
    const dialogRef = useRef(null)
    useEffect(()=>{
        if(show){
            dialogRef?.current?.showModal()
        } else{
            dialogRef?.current?.close()

        }
    },[show])



    return (
        <dialog
            ref={dialogRef}
            onCancel={closeModal}
            className={`p-4 block opacity-0 translate-y-40 transition-[opacity, transform] inset-0
            [&[open]]:opacity-100 [&[open]]:translate-y-0
            duration-500  [&:not([open])]:pointer-events-none w-1/2  rounded-xl px-6 py-5 sm:max-w-sm  shadow-2xl 
            backdrop:bg-black/50 dark:shadow-white/50 shadow-blue-500`}
        >
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <h3 className="dark:text-white text-base font-semibold leading-6 text-gray-900">
                        {title}
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm dark:text-white text-gray-500">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={closeModal}
                >
                   Terug
                </button>
            </div>

        </dialog>
    );
};

export default Modal;
