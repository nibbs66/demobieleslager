import React from 'react';
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import Card from '../../Cards/Card';
import {format} from "date-fns";
import Link from "next/link";
const Message = ({message, page}) => {
    return (
        <div className={` px-5 sm:px-20 py-5 `}>
            <Card header title={message.subject}>
                <div className={`pb-10`}>
                    <div className={`flex flex-col pl-10 text-sm`}>
                        <div className="flex items-center ">
              <span className={`font-semibold text-gray-700`}>
               {message.firstName+' '+message.lastName}
              </span>
                            <span className={`text-gray-500`}>{'<'+message.email+'>'}</span>
                        </div>
                        <span className={`text-gray-500`}>Telefoon: {message.phone}</span>
                    </div>
                    <div className="relative">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                <span className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-500">
                  {format(new Date(message.date), 'd MMMM, yyyy')}
                </span>
                        </div>
                    </div>
                    <div className={`grid grid-cols-3 space-y-6`}>
                        <div className={`col-start-2 sm:mt-5 `}>
                            <div>


                                <div className={`mt-4`}>
                                    <p
                                        className={`text-justify indent-8 text-sm font-semibold text-gray-700`}
                                    >
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-5 flex justify-center`}>
                        <Link href={`/admin/berichten?page=${page}`} className={`bg-blue-500 hover:bg-blue-400 px-2 py-1 text-white rounded-md text-sm`}>
                            <div className={`flex items-center gap-2`}>
                                <ArrowLeftIcon className={`h-5 w-5 text-white`} />
                                Terug
                            </div>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Message;
