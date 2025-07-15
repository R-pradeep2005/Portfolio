import React from 'react'

const Menu_Card =() => {
   const item = ["About","Resume","Portfolio","Contact"]
  return (
   
    <div className='bg-[#282829] flex flex-row items-center'>
      {
        item.map((item)=>( <label className='text-[15px] font-semibold'>
          {item} 
      </label>)
         
        )
      }
      
    </div>
   
  )
}

export default Menu_Card
