
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Common_Button from './components/Common_Button'
import Contact_Form from './components/Contact_Form'
import Filter_Card from './components/Filter_Card'
import Info_Block from './components/Info_Block'
import Map_Card from './components/Map_Card'
import Menu_Card from './components/Menu_Card'
import Project_Card from './components/Project_Card'
import Resume_card from './components/Resume_card'
import Skill_Card from './components/Skill_Card'
import { Github_Icon, Linkedin_Icon } from './components/Social_Icons'
import Work_Card from './components/Work_Card'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
 

function App() {

  return (
    
      <div className='flex flex-row items-start bg-[#121212]'>
        <section className='flex flex-col items-center bg-[#1e1e1f] border-1 border-[#313131] rounded-[24px] p-6'>
        <img width={'150px'} src='src\assets\profile.png'></img>
        <h1 className='text-[26px] mt-6 mb-4 font-semibold'>Pradeep Ravisankar</h1>
        <p className=' rounded-[8px]  p-2 text-[12px] bg-[#2b2b2c] text-center'>Software Engineer</p>
        <div className='h-[1.5px] w-full bg-[#313132] rounded-full mt-6 '></div>
        <div>
        <Info_Block src='src\assets\icon-mail.svg' name='EMAIL' detail='pradeepravisankar1@gmail.com'/>
        <Info_Block src='src\assets\icon-phone.svg' name='PHONE' detail='+91 7904537192'/>
        <Info_Block src='src\assets\icon-location.svg' name='LOCATION' detail='Chennai'/>
        </div>
        </section>
        <main className='flex flex-col relative items-center ml-4 bg-[#1e1e1f] border-1 border-[#313131] rounded-[24px] p-6 pt-0 '>
       <div className='static'>
        <Routes>
          <Route path='/About' element={<About/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/Project' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes></div> 
        <div className='absolute to-[-50px] right-0'><Menu_Card /></div>
        </main>
        

      </div>

  )
}

export default App
