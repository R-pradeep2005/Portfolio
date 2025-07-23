import React from 'react'
import { Tooltip } from 'react-tooltip'

const Info_Block = (props) => {
  return (
    <div className='h-[48px] flex flex-row mt-8 lg:mr-2'>
        <div className='w-[48px] h-[48px] flex rounded-xl border-1 border-[#414141] bg-[#202022] shadow-md items-center justify-center'>
            <img className='w-[16px] h-[16px]' src={props.src} ></img>
        </div>
        <div className='flex flex-col items-start pl-3 justify-center'>
            <label className='text-[12px] text-gray-400'>
             {props.name}
            </label>
            <p data-tooltip-id='t_mail' data-tooltip-content="pradeepravisankar1@gmail.com" className='text-[15px] m-0 text-left w-[132px]  overflow-hidden text-ellipsis whitespace-nowrap  '>{props.detail}</p>
            <Tooltip id='t_mail' place='top'></Tooltip> 
        </div>
      
    </div>
  )
}

export default Info_Block
