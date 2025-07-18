import React from 'react'
import Work_Card from '../components/Work_Card'

const About = () => {
  return (
    <div className='flex flex-col items-start     rounded-[20px] h-full'>
      <h1 className='font-bold text-[32px] pt-4'>About Me</h1>
      <div className='h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]'></div>
      <p className='text-[#d6d6d6] pt-6 text-left text-[15px]'>
        I'm a Computer Science senior at the University of Houston with a minor in Mathematics and a 3.8 GPA. I've completed five internships across healthcare, tech startups, and research environments — contributing to full-stack applications, predictive analytics, and iOS development. Passionate about solving real-world problems through code, I've built and deployed software using modern technologies such as React, Node.js, Django, and Swift. I’m actively seeking 
        full-time opportunities in Software Engineering, ML, or iOS development starting May 2025.

      </p>
      <h1 className='font-semibold text-[24px] mt-12'>What I'm Doing</h1>
      <div className='grid grid-cols-2 gap-4 mt-6 w-full'>
        <Work_Card src='src\assets\vector-react.svg' title="FUll Stack Development" brief='Full stack development using react express mongodb and nodejs' />
        <Work_Card src='src\assets\vector-expo.svg' title="Expo App Development" brief='Android App development using expo express mongodb and nodejs' />
        <Work_Card src='src\assets\vector-git.svg' title="Version Control" brief='Maintain the source version using git and github for efficent code management' />
        <Work_Card src='src\assets\vector-oops.svg' title="Object-Oriented Programming" brief='Writing scalable and maintainable code using OOP principles in Python, Java, C++, and C#' />
        <Work_Card src='src\assets\img-deploy.png' title="Deployment" brief='Deployment using cloud platforms' />

      </div>
    </div>
  )
}

export default About
