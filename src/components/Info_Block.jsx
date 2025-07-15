import React from 'react'

const Info_Block = () => {
  return (
    <div className='h-[48px] flex flex-row'>
        <div className='w-[48px] h-[48px] flex rounded-xl bg-[#202022] shadow-md items-center justify-center'>
            <img className='w-[16px] h-[16px]' src='src\assets\icon-mail.svg' ></img>
        </div>
        <div className='flex flex-col items-start pl-3 justify-center'>
            <label className='text-[12px] text-gray-400'>
              EMAIL
            </label>
            <p className='text-[15px]'>example@gmail.com</p>
        </div>
      
    </div>
  )
}

export default Info_Block
