import Icons from "./Icons";


function AboutMe() {
  return (
    <div className="aboutMe lg:mt-20 lg:mx-12 ">
      <div className="header text-white text-xl pb-1 lg:pb-5 lg:text-4xl">
        BIM / DEVELOPER
      </div>
      <div className="flex flex-row">
        <p className="text-white text-xs text-left max-w-70 md:max-w-110 md:text-lg lg:text-2xl lg:max-w-2xl lg:leading-relaxed">
        Since the inception of my architectural journey, I have been captivated by the technological advancements that empower architects with innovative tools. This fascination led me to master all facets of Autodesk Revit and its complementary technologies. To further expand my expertise, I incorporated coding into my skill set, enabling me to implement and better understand Revit automation and explore the potential of AI.
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