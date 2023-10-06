import React from 'react';
import {imageHelper} from "../../utils/imageHelper";
const FileUpload = ({preview, setPreview, setPicture}) => {
    return (

        <div className="bg-slate-100 sm:col-span-6 px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-4 md:gap-5">
                <div className="md:col-span-4">
                    <div className={`col-span-1`}>
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Upload foto</h3>
                    </div>
                    <div className={`col-span-4 `}>
                        <div className={`flex justify-center space-x-6`}>


                            {preview.length > 0 ?
                                preview.map((picture, idx) => (
                                    <div key={idx}>
                                            <span
                                                className="inline-block h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                                   <img  src={URL.createObjectURL(picture)} className={`h-full w-full`}
                                        alt={``}/>
                                </span></div>
                                ))
                                :
                                <span
                                    className="inline-block h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                 className={`h-full w-full`}
                                 alt="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"/>
                         </span>
                            }


                        </div>

                    </div>

                </div>
                <div className="mt-5 rounded p-2 shadow bg-white space-y-6 md:col-span-4 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label className="block text-sm font-medium text-gray-700"></label>
                            <div

                                className="mt-1 flex justify-center  rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">


                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex justify-center text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span >Upload a file</span>
                                            <input

                                                onChange={(event)=> {
                                                    setPreview((prev)=>[...prev, event.target.files[0]])
                                                    setPicture(event.target.files[0])

                                                }}
                                                id="file-upload" name="file-upload" type="file"
                                                className="sr-only"/>x
                                        </label>

                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
