import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu_Card =() => {
  const [setactive]=useState("About")
   const item = ["/","Resume","Project","Contact"]
   const path=window.location.pathname=='/'?'/':window.location.pathname.replaceAll('/','')
  return (
   
    <div className='bg-[#282829] flex flex-row items-center pl-2 pr-2  rounded-tr-[24px] rounded-bl-[24px] border-[#474747] border-1 cursor-pointer'>
      {
          item.map((item,index)=>( <Link to={ item} key={index}   className={`text-[15px] font-semibold p-5 cursor-pointer hover:text-[#8f8f8f] ${(path==item)? 'text-[#fbd36b] hover:text-[#fbd36b]':'text-white'}` } onClick={()=>{setactive(item)
             
          }}>
          {item=="/"?"About":item}
      </Link >)
         
        )
      }
      
    </div>
   
  )
}

export default Menu_Card
