import React, { useState } from 'react'
import Common_Button from './Common_Button'
import emailjs from '@emailjs/browser'

const Contact_Form = () => {
   const [formData,setData] =useState({
    name:'',
    email:'',
    message:''
   })

  

   const handlechange=(e)=>{
          
    
          setData((perv)=>({...perv ,[e.target.name]:e.target.value}))
   }

  const handleSubmit=(event)=>{

    event.preventDefault();

    emailjs.send('service_r2pvvvf','template_cwr7oqi',{formData})
    emailjs.send('service_r2pvvvf','template_zsqnmp9',{formData})

    console.log(formData);
    

  }
  
  return (
    <form className='flex flex-col mt-12 w-full items-start' onSubmit={handleSubmit} >
        <h3 className='font-bold text-[24px] '>
            Contact Form
        </h3>
        <div className='flex flex-row w-full items-center'>
            <input name='name' value={formData.name} onChange={handlechange} className='border-1 border-[#383838] m-3 ml-0 w-full h-[54px] pl-4 rounded-xl'placeholder='Full Name' required></input>
            <input name='email' value={formData.email} onChange={handlechange} type='email' className='border-1 border-[#383838] m-3 mr-0 w-full h-[54px] pl-4 rounded-xl'placeholder='Email address' required></input>
        </div>
        <input name='message' value={formData.message} onChange={handlechange} className='flex  border-1 w-full border-[#383838] m-3 ml-0  h-[100px] pl-4 rounded-xl'placeholder='Your Message'></input>  
        <div className='flex flex-row w-full justify-end mt-3  '>
           <button  type='submit' className='flex flex-row p-4 h-[54px] ml-2 items-center shadow-md  border-1 hover:border-amber-200 cursor-pointer border-[#767676] bg-[#1e1e1f] rounded-[14px] 
    '>
          <img  className='w-[18px] h-[18px] ' src='src\assets\icon-send.svg' alt="" />
            <p className=' pl-2 text-[16px] font-semibold text-[#ffdb70]'>Send Message</p>   
    </button >
        </div>
    </form>
  )
}

export default Contact_Form
