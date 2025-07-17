import React from 'react'
import Common_Button from './Common_Button'

const Contact_Form = () => {
  return (
    <form className='flex flex-col items-start'>
        <h3 className='font-bold text-[24px] '>
            Contact Form
        </h3>
        <div className='flex flex-row items-center'>
            <input className='border-1 border-[#383838] m-3 ml-0 w-full h-[54px] pl-4 rounded-xl'placeholder='Full Name' required></input>
            <input className='border-1 border-[#383838] m-3 w-full h-[54px] pl-4 rounded-xl'placeholder='Email address' required></input>
        </div>
        <input className='flex  border-1 w-full border-[#383838] m-3 ml-0  h-[100px] pl-4 rounded-xl'placeholder='Your Message'></input>  
        <div className='flex flex-row w-full justify-end m-3  '>
            <Common_Button  src='src\assets\icon-send.svg' name='Send Message'/>
        </div>
    </form>
  )
}

export default Contact_Form
