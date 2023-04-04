import React from 'react'
import Button from './Button'

function ContactSection() {
  return (
    <>
    <div className='font-manrope text-white gap-10 flex flex-col items-center'>
        <h1 className='font-clashDisplay text-[4rem] text-primaryColor_lightBlue mb-[1rem]'>Contact</h1>
        <span className='px-[32rem] mb-[2rem]'>Questions are a human thing and we are happy to answer them! Please contact us through the form or at contact@slove.live.</span>
        <form action="/" className='flex flex-col'>
            <label htmlFor="email">Email adress</label>
            <input type="email" name="Email" id="email" value="Email adress" />

            <label htmlFor="text">Your question</label>
            <input type="text" name="text" id="text" value="Ask your question here" />

            <Button label='Send' className='py-4 px-10 rounded-full bg-primaryColor_turquoise text-white' />
        </form>
    </div>
    </>
  )
}

export default ContactSection