import React from 'react'
import { Spotlight } from '../components/ui/Spotlight';
import {TextGenerateEffect} from '../components/ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { FloatingNav } from './ui/FloatingNav';
function Hero() {
  return (
    <div className='pb-20 pt-36 overflow-hidden  bg-black'>
      <div className=''>
        <Spotlight 
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" 
        fill="red" />
        <Spotlight
         className="top-10  h-[80vh] w-[20vh]"
          fill="purple" />
        <Spotlight 
        className="top-28 left-80 h-[80vh] w-[20vh]"
         fill="blue" />
      </div>
        
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
     
    </div>

    <div className='flex justify-center relative my-20 z-10'>
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h1 className='uppercase tracking-widest text-xs text-center tet-blue-100
        max-w-80'>
          Dynamic Web Magic with Next.js
        </h1>

        <TextGenerateEffect  
        className="text-center text-[40px] md:text-5xl lg:text-6xl   "
        words="Transforming Ideas into Stunning Websites"
        />

        <p className="text-center">
          Hi , I'm <span className="font-bold">Umair</span> , a passionate web developer

        </p>
      </div>

      <a href="#about">
   <MagicButton 
   title={"Show my work"}
   icon ={<FaLocationArrow />}
   position='right'
   />

      </a> 
        <FloatingNav navItems={[{name:"Home" , link:"/" ,},
    {name:"About" , link:"/about",}]} />
    </div>
    </div>
  )
}

export default Hero