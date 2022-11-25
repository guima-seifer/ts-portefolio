import { HiArrowNarrowRight } from 'react-icons/hi'
import Section from '../layout/section'

export type HeroProps = {
  children?: React.ReactNode
}

const Hero = () => {
  return (
    <Section charKey='home'>
      <p className='dark:text-white text-teal-900'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold dark:text-pink-600 text-teal-900'>
        Fernando Guimarães
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
        I´m a web developer.
      </h2>
      <p className='text-gray-500 py-4 max-w-[700px]'>
        Specializing in building applications with React.
      </p>
      <div>
        <button
          className='dark:bg-pink-600 bg-teal-900 text-white  group px-6 py-3 
            my-2 flex 
            items-center hover:bg-gray-500'
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
export default Hero
