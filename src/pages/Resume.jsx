import React from 'react'
import Common_Button from '../components/Common_Button'
import Resume_card from '../components/Resume_card'
import Skill_Card from '../components/Skill_Card'

const Resume = () => {
  return (
    <div className='flex flex-col items-start p-6    rounded-[20px] h-full'>
    <h1 className='font-bold text-[32px] pt-4'>Resume</h1>
    <div className='h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]'></div>
    <div className='w-full flex justify-center mt-6'>
    <Common_Button  src='src\assets\icon-download.svg' name='Download Resume'/>
    <Common_Button src='src\assets\icon-view.svg' name='View Resume'/>
    </div>

    <Resume_card logo='src\assets\logo-kcg.jpg' section='Education' institution='Kcg College of Technology' title='Bacholer of Engineering' duration='2022 to 2026'/>
    <h1 className='font-bold text-[24px] pt-6'>My Skills</h1>
    <div className='flex flex-col items-start  pl-6 pr-6 pb-6 mb-3 w-full bg-[#232324] border-1 border-[#383838] mt-4 rounded-[20px] h-full'>
        <Skill_Card skill='React js' percentage='45%'/>
        <Skill_Card skill='Component-based UI Design' percentage='45%'/>
        <Skill_Card skill='Linux Basics' percentage='45%'/>
        <Skill_Card skill='Git' percentage='45%'/>
        <Skill_Card skill='GitHub' percentage='45%'/>

    </div>

    </div>
  )
}

export default Resume
