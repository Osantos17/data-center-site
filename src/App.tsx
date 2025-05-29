import './App.css'
import AboutMe from './components/AboutMe'
import Aframe from './components/Aframe'
import HarborView from './components/HarborView'
import MT2 from './components/MT2'
import PlugIn from './components/PlugIn'
import Southline from './components/Southline'
import WoodWorking from './components/Woodworking'


function App() {
  

  return (
    <div className='bg-[#031713] w-full min-h-screen overflow-x-hidden'>
      <div className='mx-5 my-7 md:mx-16 md:my-10 '>
        <div>
          <AboutMe />
        </div>
        <div className='text-white relative bottom-3 text-2xl text-center md:text-4xl md:mt-16 lg:bottom-0 lg:mt-4 lg:text-7xl'>BIM</div>
        <div className='border-t border-gray-600 relative bottom-3 lg:my-4 w-full'></div>
          <div>
            <div className='lg:mt-14'>
              <Southline />
            </div>
            <div className='mt-6 lg:mt-18'>
              <HarborView />
            </div>
            <div className='mt-6 mb-8 lg:mg-0 lg:mt-18'>
              <MT2 />
            </div>
          </div>
          <div className='text-white text-2xl text-center md:text-4xl md:mt-16 lg:bottom-0 lg:mt-20 lg:text-7xl'>DEVELOPER</div>
        <div className='border-t border-gray-600 lg:my-4 w-full'></div>
          <div className='mt-3 lg:mt-6 lg:mt-18'>
            <PlugIn />
          </div>
           <div className='mt-10 lg:mt-18'>
             <Aframe />
           </div>
        <div className='md:mt-20 mt-12'>
          <WoodWorking />
        </div>
      </div>
    </div>
  )
}

export default App
