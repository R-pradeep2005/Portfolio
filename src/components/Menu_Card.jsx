import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu_Card =() => {
  const [setactive]=useState("About")
   const item = ["/","Resume","Project","Contact"]
   const path=window.location.pathname=='/'?'/':window.location.pathname.replaceAll('/','')
  return (
   
    <div className='md:bg-[#282829] flex flex-row items-center sm:pl-2 sm:pr-2 justify-around mt-3 sm:mt-0 sm:m-0 m-4 md:rounded-tr-[24px] md:rounded-bl-[24px] md:border-[#474747] md:border-1 sm:w-full w-[280px]  cursor-pointer'>
      {
          item.map((item,index)=>( <Link to={ item} key={index}  viewTransition  className={`text-[15px] font-semibold sm:p-5 cursor-pointer hover:text-[#8f8f8f] ${(path==item)? 'text-[#fbd36b] hover:text-[#fbd36b]':'text-white'}` } onClick={()=>{setactive(item)
             
          }}>
          {item=="/"?"About":item}
      </Link >)
         
        )
      }
      
    </div>
   
  )
}

export default Menu_Card
