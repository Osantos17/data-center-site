import './App.css'
import AboutMe from './components/AboutMe'
import Aframe from './components/Aframe'
import WoodWorking from './components/Woodworking'


function App() {
  

  return (
    <div className='bg-[#031713] w-full min-h-screen overflow-x-hidden'>
      <div className='mx-5 my-7 md:mx-16 md:my-10 '>
        <div>
          <AboutMe />
        </div>
        <div className=' lg:mt-30'>
          <Aframe />
        </div>
        <div className='mt-12'>
          <WoodWorking />
        </div>
      </div>
    </div>
  )
}

export default App
