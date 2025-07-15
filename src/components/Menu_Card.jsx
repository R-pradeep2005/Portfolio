import React, { useState } from 'react'

const Menu_Card =() => {
  const [active,setactive]=useState("About")
   const item = ["About","Resume","Portfolio","Contact"]
  return (
   
    <div className='bg-[#282829] flex flex-row items-center pl-2 pr-2  rounded-tr-[24px] rounded-bl-[24px] border-[#474747] border-1 cursor-pointer'>
      {
          item.map((item,index)=>( <label key={index} className={`text-[15px] font-semibold p-5 cursor-pointer hover:text-[#8f8f8f] ${(active==item)? 'text-[#fbd36b] hover:text-[#fbd36b]':'text-white'}`} onClick={()=>{setactive(item)
            console.log(active)
          }}>
          {item} 
      </label>)
         
        )
      }
      
    </div>
   
  )
}

export default Menu_Card
