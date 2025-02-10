"use client"

import React from 'react'

function EmailSection() {

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const requestObj = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: requestObj,
        };
        
        const response = await fetch(endpoint, options);
        const result = await response.json()
        if(response.status === 200){
            console.log("result", result)
        }
    }
  return (
    <div>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email' className='text-white block mb-3 text-sm font-medium '>Your Email</label>
                <input 
                    name='email'
                    type='email' 
                    id="email" 
                    required 
                    placeholder='abc@gmail.com'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                />
            </div>
            <div>  
                <label htmlFor='subject' className='text-white block mb-3 text-sm font-medium '>Concern</label>
                <input 
                    name="subject" 
                    type='text' 
                    id="subject"  
                    placeholder='Just saying Hii!'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                />
            </div>
            <div>  
                <label htmlFor='message' className='text-white block mb-3 text-sm font-medium '>Message</label>
                <textarea 
                    name="message"
                    id="message"  
                    placeholder='Message Goes here...'
                    className='bg-[#18191E] border min-h-[120px] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                />
            </div>
            <button 
                type="submit"
                className='bg-purple-400 hover:bg-purple-600 text-white font-bold py-2.5 px-5 rounded-xl w-full'
            >
                Send Message
            </button>
        </form>
    </div>
  )
}

export default EmailSection