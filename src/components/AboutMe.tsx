import Icons from "./Icons";


function AboutMe() {
  return (
    <div className="aboutMe lg:mt-20 lg:mx-12 ">
      <div className="header text-white text-xl pb-1 lg:pb-5 md:text-4xl lg:text-4xl">
        BIM / DEVELOPER
      </div>
      <div className="flex flex-row">
        <p className="text-white text-xs text-left max-w-70 md:max-w-150 md:text-lg lg:text-2xl lg:max-w-2xl lg:leading-relaxed">
        Since beginning my architectural career, I’ve been passionate about leveraging technology to enhance design and construction workflows. Mastery of Autodesk Revit and complementary tools, combined with programming skills, allows me to develop automation solutions that improve accuracy and efficiency. This unique blend of BIM expertise and software development fuels my drive to support complex infrastructure projects, including data center environments, through innovative process improvement and cross-disciplinary coordination.
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