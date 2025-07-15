import React from 'react'

const Project_Card = () => {
  return (
    <div className='flex flex-col items-start'>
       <div className='w-1/2 h-1/2 rounded-2xl overflow-hidden'><img   src='src\assets\demo-project.png'></img></div> 
        <h3 className='font-semibold pl-2 pt-2  text-[15px]'>Post Office DataBase</h3>
        <label className='text-[#aeaeae] pl-2 text-[15px]'>Web Application</label>
      
    </div>
  )
}

export default Project_Card
