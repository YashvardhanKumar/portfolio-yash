import React, { useState } from 'react'
import Typewriter from '../Typewriter'
import HeroVisual from '../HeroVisual';
import GradientOrbs from '../GradientOrbs';

const Home: React.FC<SectionProps> = ({reference}) => {
  const [textIndex, setTextIndex] = useState(0);

  return (
    <div
    ref={reference}
    className="text-white flex max-md:py-12 items-center md:h-[calc(85vh_-_6rem)] relative overflow-hidden w-full"
  >
    {/* Background Orbs */}
    <GradientOrbs orbs={[
      {
        position: "top-1/2 right-10 -translate-y-1/2",
        size: "w-[500px] h-[500px] sm:w-[800px] sm:h-[800px]",
        gradient: "bg-gradient-to-tr from-indigo-600/50 via-purple-600/40 to-teal-500/30",
        blur: "blur-[100px]",
        duration: 10
      },
      {
        position: "-bottom-40 left-0",
        size: "w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]",
        gradient: "bg-gradient-to-tr from-blue-600/40 via-pink-600/30 to-transparent",
        blur: "blur-[120px]",
        duration: 15,
        delay: 2
      }
    ]} />

    <div className="flex-1 flex-col sm:px-10 px-5 m-auto z-10">
      <div className=" text-ui-color text-lg font-silkscreen inline w-full">
        <span className="text-nowrap">Hello 👋 I am </span>
        <Typewriter onIndexChange={setTextIndex} />
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
    <div className="relative z-10 self-end flex-1 w-full max-md:hidden">
      <div className="h-full items-end justify-end md:flex">
        <HeroVisual currentIndex={textIndex} />
      </div>
    </div>
  </div>
  )
}

export default Home