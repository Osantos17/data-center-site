import Icons from "./Icons";


function AboutMe() {
  return (
    <div className="aboutMe lg:mt-20 lg:mx-12 ">
      <div className="header text-white text-xl pb-1 lg:pb-5 md:text-4xl lg:text-4xl">
        BIM / DEVELOPER
      </div>
      <div className="flex flex-row">
        <p className="text-white text-xs text-left max-w-70 md:max-w-150 md:text-lg lg:text-2xl lg:max-w-2xl lg:leading-relaxed">
        Since the start of my architectural path, I’ve been drawn to technology’s role in transforming design and construction. This led me to master Autodesk Revit and related tools, and to expand into coding to streamline workflows through automation. With this combined skill set, I aim to support complex infrastructure, like data centers through precision, innovation, and cross-disciplinary insight.
        </p>
        <div className="ml-auto mr-2">
          <Icons />  
        </div>
      </div>

      <div className="bottom-16 relative flex justify-end right-10 md:right-20 lg:right-24 lg:bottom-24">
        <img
          src="/images/Profile-white.png"
          alt="Profile"
          className="max-h-38 md:max-h-60 w-auto  lg:max-h-120 "
        />
      </div>
    </div>
  );
}


export default AboutMe