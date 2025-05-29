

function PlugIn () {

  return(
    <div className="PlugIn">
      <div className='text-white underline text-center text-lg lg:text-5xl mb-2 lg:mb-5 lg:mb-10'>
        PyRevit Tools
      </div>
      <div className="flex justify-evenly items-center">
        <img
          src="/images/PlugIn.png"
          alt="PlugIn"
          className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
        />
      </div>
      <div>
          <div className="text-xs text-white text-center mt-4 mx-3 md:text-xl md:mx-8 lg:mt-4 lg:mx-16 lg:text-2xl lg:leading-relaxed">
          I developed a custom Revit plugin using IronPython and pyRevit by integrating a variety of useful scripts from pyRevit and its extensions, along with several custom tools I built to match our office’s specific workflows. The result was a streamlined toolset that significantly improved day-to-day efficiency. I'm excited to continue applying and growing these skills to drive even greater impact in the office and beyond.
          </div>
        </div>
    </div>
  )
}

export default PlugIn;