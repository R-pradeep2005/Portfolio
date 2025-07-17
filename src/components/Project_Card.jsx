import React from 'react'

const Project_Card = (props) => {
  return (
    <div className='flex flex-col items-start group cursor-pointer z-10 p-2'>
       <div className='w-[260px]  rounded-2xl overflow-hidden  ' ><img  className='group-hover:scale-110 transition-transform duration-300'  src={props.src}></img></div> 
        <h3 className='font-semibold pl-2  pt-2 text-[15px] group-hover:text-[#fec462] transition-colors duration-500'>{props.title}</h3>
        <h2 className='text-[#aeaeae] group-hover:text-white pl-2 text-[15px] transition-colors duration-300 '>{props.type}</h2>
      
    </div>
  )
}

export default Project_Card
