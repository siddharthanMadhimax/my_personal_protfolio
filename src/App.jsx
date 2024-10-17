import React from 'react'
import { Hero,About,Education,Skills,Contact,Projects,Navbar, Footer} from './components'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className=' pl-12 pr-12'>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App