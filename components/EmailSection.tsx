"use client"

import React from 'react'
import { useForm, ValidationError } from "@formspree/react";
import { BsFillPatchCheckFill } from "react-icons/bs";


function EmailSection() {
    const [state, handleSubmit] = useForm("xpwqjkdp");
    if (state.succeeded) {
        return (<div className='w-[90%] h-full p-0'>
            <div className='w-full h-1/2 bg-purple-500 flex items-center justify-center rounded-t-2xl'>
                <BsFillPatchCheckFill width={50} height={60} className='text-white text-9xl animate-bounce'/>
                
            </div>
            <div className="text-center p-6">
                <p className="text-2xl text-purple-300 font-bold">Thank you for reaching out!</p>
                <p className="text-lg text-white/70 mt-2">
                    I have received your message and will get back to you as soon as possible.  
                    If your inquiry is urgent, feel free to connect with me via email or LinkedIn.
                </p>
                <p className="text-md text-white/60 mt-4">Have a great day!</p>
            </div>
        </div>)
    }
  return (
    <div>
        <form className='flex flex-col gap-8 mx-auto' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email' className='text-white block mb-3 text-sm font-medium '>Your Email</label>
                <input 
                    name='email'
                    type='email' 
                    id="email" 
                    required 
                    placeholder='abc@gmail.com'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-[90%] p-2.5'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className='mt-2 text-sm font-medium text-[#FF2600]'
                />
            </div>
            <div>  
                <label htmlFor='subject' className='text-white block mb-3 text-sm font-medium '>Concern</label>
                <input 
                    name="subject" 
                    type='text' 
                    id="subject"  
                    placeholder='Just saying Hii!'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-[90%] p-2.5'
                />
            </div>
            <div>  
                <label htmlFor='message' className='text-white block mb-3 text-sm font-medium '>Message</label>
                <textarea 
                    name="message"
                    id="message"  
                    placeholder='Message Goes here...'
                    className='bg-[#18191E] border min-h-[120px] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-[90%] p-2.5'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className='mt-2 text-sm font-medium text-text-[#FF2600]'
                />
            </div>
            <button 
                type="submit"
                disabled={state.submitting}
                className='bg-purple-400 hover:bg-purple-600 text-white font-bold py-2.5 px-5 rounded-xl w-[90%]'
            >
                Send Message
            </button>
        </form>
    </div>
  )
}

export default EmailSection