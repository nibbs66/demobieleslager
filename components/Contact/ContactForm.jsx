
import Image from "next/image";
import logo from "../../public/img/slager_logo.png";
import {useRef, useState} from "react";
import ContactModal from "./ContactModal";

export default function ContactForm() {
    const mailRef = useRef(null)
    const [open, setOpen] = useState(false)
    const handleSubmit = async (e) => {
        const {firstName, lastName, email, phone, subject, message} = mailRef.current

       try {

          const res = await fetch('/api/contact', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                   firstName: firstName.value,
                   lastName: lastName.value,
                   email: email.value,
                   phone: phone.value,
                   subject: subject.value,
                   message: message.value,
               }),
           })
           if(res.ok) {
               setOpen(true)
               mailRef.current.reset()
           }
               } catch (err) {
           console.log(err)
       }



    }
    return (
<div>
    <ContactModal message={'Uw bericht is verzonden'} title={'Bedankt!'} show={open} closeModal={()=>setOpen(false)}/>
    <div className="relative  bg-white/30 backdrop-blur-lg rounded-xl shadow-2xl shadow-blue-500/30 px-6 py-8 sm:py-10 lg:px-8">


        <div className="mx-auto max-w-xl lg:max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Heeft u een vraag?</h2>

            <div className="mt-16 flex flex-col gap-10 sm:gap-y-10 lg:flex-row">
                <form ref={mailRef} className="lg:flex-auto">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                                Voornaam
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                                Achternaam
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                Telefoon
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="url"
                                    name="phone"
                                    id="phone"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className={`col-span-2`}>
                            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                                Subject
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="url"
                                    name="subject"
                                    id="subject"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Verzenden
                        </button>
                    </div>

                </form>
                <div className="lg:mt-6 lg:w-80  lg:flex-none">
                    <div className={``}>
                        <Image src={logo} alt={'logo'} width={400} height={400}
                               className="mt-0 aspect-[6/5] w-full max-w-lg rounded-2xl object-contain sm:mt-16 lg:mt-0 lg:max-w-xl xl:row-span-2 xl:row-end-2 "

                        />

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>    )
}
