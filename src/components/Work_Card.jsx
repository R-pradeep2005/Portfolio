import React from 'react'

const Work_Card = () => {
  return (
    <div className='flex flex-row rounded-[20px] shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] border-1 bg-[#212123] border-[#474747] p-6 w-[380px]'>
      <img className='h-[80px] pr-4' src='src\assets\vector-react.svg'></img>
      <div className='flex flex-col items-start justify-center '>
        <h3 className='text-[18px] font-bold text-[#ffffff]'>Full-Stack Development</h3>
        <p className='text-[#d6d6d6] font-semibold text-left pt-2 text-[15px]'>Building scalable full-stack applications using React, Node.js, Express, Django, and MongoDB</p>

      </div>
    </div>
  )
}

export default Work_Card
