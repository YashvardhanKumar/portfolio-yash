import React from 'react'
import Typewriter from '../Typewriter'
import avatar from "../../assets/avatar.png";

const Home: React.FC<SectionProps> = ({reference}) => {
  
  return (
    <div
    ref={reference}
    className="text-white flex max-md:py-12 items-center md:h-[calc(85vh_-_6rem)]"
  >
    <div className="flex-1 flex-col sm:px-10 px-5  m-auto">
      <div className=" text-ui-color text-lg font-silkscreen inline w-full">
        <span className="text-nowrap">Hello 👋 I am </span>
        <Typewriter />
      </div>
      <div className="font-lobster-two sm:text-7xl text-5xl text-pretty py-5">
        I develop Apps & Websites, and UIs
      </div>
      <div className="text-gray-400 font-poppins sm:text-xl text-lg">
        With a strong foundation in various programming languages and
        frameworks, I have experience building and deploying applications
        that make a real-world impact. 🚀
      </div>
    </div>
    <div className="relative self-end flex-1 w-full max-md:hidden">
      <div className="h-full items-end justify-end md:flex">
        <img src={avatar} alt="" className="object-cover max-h-[600px]" />
      </div>
    </div>
  </div>
  )
}

export default Home