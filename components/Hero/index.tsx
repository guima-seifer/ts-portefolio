import { HiArrowNarrowRight } from 'react-icons/hi'
import Section from '../layout/section'

export type HeroProps = {
  children?: React.ReactNode
}

export const Hero = () => {
  return (
    <Section charKey='home'>
      <p className='dark:text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold '>Fernando Guimarães</h1>
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
    </Section>
  )
}
