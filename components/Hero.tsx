import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { NavBarProps } from './Navbar';

export type HeroProps = {
  children?: React.ReactNode;
  dark?: NavBarProps,
}

export const Hero = ({dark}: HeroProps)=> {
  return (
      <div id='home' className='w-full h-screen bg-white dark:bg-[#0a192f] text-gray-900 dark:text-gray-300'>
        {/*  Container  */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='dark:text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold '>
            Fernando Guimarães
          </h1>
          <h1 className='text-4xl sm:text-7xl font-bold '>
            Current theme is: {dark ? 'Dark' : 'Light'}
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
            I´m a frontend developer.
          </h2>
          <p className='text-gray-500 py-4 max-w-[700px]'>
            Specializing in building applications with React.
          </p>
          <div>
            <button
              className='bg-pink-600 text-white  group border-2 px-6 py-3 
            my-2 flex 
            items-center dark:hover:border-pink-600 hover:border-pink-600'
            >
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>
        </div>
      </div>
  )
}
