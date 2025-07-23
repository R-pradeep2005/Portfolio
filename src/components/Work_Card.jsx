import React from 'react'
import { Tooltip } from 'react-tooltip'

const Work_Card = (props) => {
  return (
    <><div data-tooltip-id='t_card' data-tooltip-content="This cards are not clikable only for showcase" className='flex animation-scale flex-row rounded-[20px] items-start shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] border-1 bg-[#212123] cursor-pointer border-[#474747] p-6 w-full'>
      <img className='sm:h-[80px] h-[40px]  pr-4' src={props.src}></img>
      <div className='flex flex-col items-start justify-center '>
        <h3 className='text-[18px] font-bold text-left text-[#ffffff]'>{props.title}</h3>
        <p className='text-[#d6d6d6] text-left font-semibold  pt-2 text-[15px]'>{props.brief}</p>

      </div>
    </div>
     <Tooltip id='t_card' place='top'></Tooltip>
    </>
  )
}

export default Work_Card
