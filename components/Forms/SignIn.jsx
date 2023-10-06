import { useRef } from 'react'
import Image from "next/image";
import logo from "../../public/img/slager_logo.png";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

export default function SignIn() {
    const {data: session, status} = useSession()
    const router = useRouter()
    const formData = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {username, password} = formData.current
       await fetch(`/api/user/auth`, {
            method: "POST",
            body: JSON.stringify({ username: username.value,
                password: password.value}),
            headers: {
                "Content-Type": "application/json",
            },
        }
        ).then((res) => res.json())
            .then(async (data) => {

              const res =  await signIn('credentials', {
                    id: data.id,
                    username: data.username,
                    email: data.email,
                    isAdmin: data.isAdmin,
                    redirect: false,
                })
                if(res.status === 200) {
                    formData.current.reset()
                    router.push(`/admin/producten?page=1&category=title&order=asc`)

                }

                })

    }
    return (
        <div className={`${status === 'authenticated' && 'hidden'} mx-auto w-full  max-w-md sm:max-w-xl rounded-lg bg-white shadow-2xl shadow-sky-500/50`}>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className={`${status === 'authenticated' && 'invisible'} flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                    <Image src={logo} alt={`logo`} width={80} height={80} className={`  p-2 rounded`}/>
                    <h2 className="mt-10 title text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      De Mobiele Slager
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form ref={formData} className="space-y-6" >
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                               Gebruikersnaam
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    required
                                    className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Wachtwoord
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Inloggen
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}
