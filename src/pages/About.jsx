import React from 'react'
import Work_Card from '../components/Work_Card'

const About = () => {
      const card=[{src:'src/assets/vector-react.svg',
        title:'Full Stack Development', 
        brief:'Full stack development using react express mongodb and nodejs'},
        {src:'src/assets/vector-expo.svg',
          title:'Expo App Development', 
          brief:'Android App development using expo express mongodb and nodejs'},
        {src:'src/assets/vector-git.svg',
          title:'Version Control', 
          brief:'Maintain the source version using git and github for efficent code management'},
        {src:'src/assets/vector-oops.svg',
          title:'Object-Oriented Programming', 
          brief:'Writing scalable and maintainable code using OOP principles in Python, Java, C++, and C#'}
          ,
        {src:'src/assets/img-deploy.png',
          title:'Deployment', 
          brief:'FullDeployment using cloud platforms'}
        ]

  return (
    <div className='flex flex-col items-start     rounded-[20px] h-full'>
      <h1 className='font-bold text-[32px] pt-4'>About Me</h1>
      <div className='h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]'></div>
      <p className='text-[#d6d6d6] pt-6 text-left text-[15px]'>
        I'm a Final-year Computer Science student who loves exploring how ideas become real through code. I’m learning by building small web and mobile projects with React.js, Expo, Git, and GitHub. While I’m still new to many concepts, I enjoy experimenting, learning from mistakes, and watching my projects grow step by step.

      </p>
      <h1 className='font-semibold text-[24px] mt-12'>What I'm Doing</h1>
      <div className='grid grid-cols-2 gap-4 mt-6 w-full'>
            {card.map((item,index)=>(<Work_Card key={index} src={item.src} title={item.title} brief={item.brief}/>))}
      </div>
    </div>
  )
}

export default About
