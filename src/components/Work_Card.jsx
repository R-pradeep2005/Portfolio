import React from 'react'

const Work_Card = (props) => {
  return (
    <div className='flex animation-scale flex-row rounded-[20px] items-start shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] border-1 bg-[#212123] border-[#474747] p-6 w-[380px]'>
      <img className='h-[80px] pr-4' src={props.src}></img>
      <div className='flex flex-col items-start justify-center '>
        <h3 className='text-[18px] font-bold text-left text-[#ffffff]'>{props.title}</h3>
        <p className='text-[#d6d6d6] text-left font-semibold text-left pt-2 text-[15px]'>{props.brief}</p>

      </div>
    </div>
  )
}

export default Work_Card
