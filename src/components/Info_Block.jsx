import React from 'react'

const Info_Block = (props) => {
  return (
    <div className='h-[48px] flex flex-row mt-8'>
        <div className='w-[48px] h-[48px] flex rounded-xl border-1 border-[#414141] bg-[#202022] shadow-md items-center justify-center'>
            <img className='w-[16px] h-[16px]' src={props.src} ></img>
        </div>
        <div className='flex flex-col items-start pl-3 justify-center'>
            <label className='text-[12px] text-gray-400'>
             {props.name}
            </label>
            <p className='text-[15px]'>{props.detail}</p>
        </div>
      
    </div>
  )
}

export default Info_Block
