 import React from 'react'
 
 const Common_Button = (props) => {
   return (
    <a className='flex flex-row p-4 h-[54px] items-center shadow-md border-1 hover:border-[#ffdb70] border-[#767676] bg-[#1e1e1f] rounded-[16px] 
    '>
 <img  className='w-[18px] h-[18px] ' src={props.src} alt="" />
 <p className=' pl-2 text-[16px] font-semibold text-[#ffdb70]'>{props.name}</p>   
    </a>
   )
 }
 
 export default Common_Button
 