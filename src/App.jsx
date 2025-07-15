
import './App.css'
import Common_Button from './components/Common_Button'
import Info_Block from './components/Info_Block'
import Menu_Card from './components/Menu_Card'
import { Github_Icon, Linkedin_Icon } from './components/Social_Icons'
import Work_Card from './components/Work_Card'
 

function App() {

  return (
    <>
        <Common_Button src='src\assets\icon-send.svg' name='send message'/>
        <Common_Button src='src\assets\icon-download.svg' name='Download'/>
    </>
  )
}

export default App
