import React from 'react'
import Common_Button from '../components/Common_Button'
import Resume_card from '../components/Resume_card'
import Skill_Card from '../components/Skill_Card'

const Resume = () => {
  return (
    <div className='flex flex-col items-start    rounded-[20px] h-full'>
    <h1 className='font-bold text-[32px] pt-4'>Resume</h1>
    <div className='h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]'></div>
    <div className='w-full flex flex-row justify-center items-center mt-6'>
      <a   href='/assets/Resume.pdf' download className='flex flex-row p-6 h-[54px] ml-2 items-center shadow-md  border-1 hover:border-amber-200 cursor-pointer border-[#767676] bg-[#1e1e1f] rounded-[14px] 
    '>
 <img  className='w-[18px] h-[18px] ' src='/assets/icon-download.svg' alt="" />
 <p className=' pl-2 text-[16px] font-semibold text-[#ffdb70]'>Download Resume</p>   
    </a >
     <a href='/assets/Resume.pdf' target='_blank'   className='flex flex-row p-6 h-[54px] ml-2 items-center shadow-md  border-1 hover:border-amber-200 cursor-pointer border-[#767676] bg-[#1e1e1f] rounded-[14px] 
    '>
 <img  className='w-[18px] h-[18px] ' src='/assets/icon-view.svg' alt="" />
 <p className=' pl-2 text-[16px] font-semibold text-[#ffdb70]'>View Resume</p>   
    </a >
     </div>

    <Resume_card logo='/assets/logo-kcg.jpg' section='Education' institution='Kcg College of Technology' title='Bacholer of Engineering' duration='2022 to 2026'/>
    <Resume_card logo='/assets/logo-copter_code.jpg' section='Experience' institution='Copter Code' title='Software Developer Intern' duration='1 month' brief='Worked on developing MERN Stack web applications using React.js and Node.js.'/>

    <h1 className='font-bold text-[24px] pt-6'>My Skills</h1>
    <div className='flex flex-col items-start  pl-6 pr-6 pb-6 mb-3 w-full bg-[#232324] border-1 border-[#383838] mt-4 rounded-[20px] h-full'>
        <Skill_Card skill='React js' percentage='65%'/>
        <Skill_Card skill='Component-based UI Design' percentage='70%'/>
        <Skill_Card skill='Linux Basics' percentage='60%'/>
        <Skill_Card skill='Git' percentage='70%'/>
        <Skill_Card skill='GitHub' percentage='45%'/>

    </div>

    </div>
  )
}

export default Resume
