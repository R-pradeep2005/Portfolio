import React from 'react'

const Project_Card = (props) => {
  return (
    <div className={`flex text-left flex-col border-1 bg-[#252525] border-[#424242] rounded-[20px] shadow-md pb-2 w-[232px] items-start ${props.className} group cursor-pointer`}>
       <div className='w-[230px]  rounded-2xl overflow-hidden  ' ><img  className='group-hover:scale-110 transition-transform duration-300'  src={props.src}></img></div> 
        <h3 className='font-semibold pl-2  pt-3 text-[15px] group-hover:text-[#f7f7f7] transition-colors duration-500'>{props.title}</h3>
        <div className='flex flex-row items-center pt-1 justify-between w-full'><h2 className='text-[#aeaeae] group-hover:text-gray-300 pl-2  text-[15px] transition-colors duration-300 '>{props.type}</h2>
        <a target="_blank" href={props.githublink}   className='text-[#fec462] hover:text-amber-200 sm:border-1 sm:bg-[#2d2d2d] sm:rounded-xl  sm:p-2 m-2 sm:hover:border-[#fec462] sm:border-[#414141] text-[12px] pt-2 pr-2 font-bold'> View in Github</a>
        </div>
      
    </div>
  )
}

export default Project_Card
