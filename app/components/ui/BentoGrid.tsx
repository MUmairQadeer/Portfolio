"use client"
import { div } from "motion/react-client";
import { cn } from "../utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  img,
  titleClassName,
  spareImg

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;

  id: number,
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string

}) => {
  const [copied ,setCopied] =useState(false)

  const handleCopy =()=>{
    navigator.clipboard.writeText('M.umairjutt381')
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl overflow-hidden group/bento relative hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  border border-white/[0.1]  justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >

      <div className={`${id === 6}` && 'flex justify-center h-full'}>
        <div className="w-fullh-full absolute">
          {img &&
            <img src={img}
              className={cn(imgClassName, 'w-full h-full object-cover object-center')}
              alt={img} />

          }
        </div>

        <div className="{`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}">
          {spareImg &&
            <img src={spareImg}
              className={'w-full h-full object-cover object-center'}
              alt={spareImg} />}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation >
            {/* <div className="absolute z-50 flex items-center justify-center 
            text-white font-bold"/> */}
          </BackgroundGradientAnimation>


        )}
        <div className={cn(titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10
              text-neutral-600 text-sm dark:text-neutral-300">
            {description}
          </div>

          <div className="font-sans font-bold text-lg md:text-2xl lg:text-3xl z-10 max-w-96 text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>


          {id === 2 && <GlobeDemo />}
          {
            id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 lg:gap-8">
                  {['React.js', 'Next.js', 'Typescript'].map
                    ((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs
                      lg:text-base opacity-50 lg-opacity-100 rounded-lg
                      text-center bg-[#10132E]"> {item} </span>
                    ))}

                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]">

                  </span>
                </div>

                <div className="flex flex-col gap-3 lg:gap-8"><span className="py-4 px-3 rounded-lg text-center bg-[#10132e]">

                </span>
                  {['Vue.js', 'Angular.js', 'Javacript'].map
                    ((item) => (
                      <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs
                      lg:text-base opacity-50 lg-opacity-100 rounded-lg
                      text-center bg-[#10132E]"> {item} </span>
                    ))}


                </div>
              </div>)

          }

          {id === 6 && (
           <div className="mt-5 relative ">
            <div className="absolute -bottom-5 right-0">
                 <Lottie options={{
                  loop: copied,
                  autoplay :copied,
                  animationData,
                  preserveAspectRatio:'xMidYMid slice'
                 }} 
                 />

            </div>
            <MagicButton  title={copied ? 'Email Copied' : 'Copy my email'}
            icon ={<IoCopyOutline/>}
            position="left"
            otherClasses="bg-[#161a31]"
            handleClick={handleCopy}
            />

           </div>

          )}
        </div>

      </div>
    </div>
  );
};
