import './App.css'
import About from './components/About/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skills from './components/Skills'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar />
      <div id='hero'><Hero /></div>
      <div id='About'><About /></div>
      <div id='Skills'><Skills /></div>
      <div id='Experience'><Experience /></div>
      <div id='Projects'><Project /></div>
      <div id='Contact'><Contact /></div>
    </div>
  )
}

export default App
