import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]  text-gray-300'>
      <div className='flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='text-3xl font-bold'>
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I´m developer from Portugal. My academic background is
              Telecommunications and Computer Sciences at the University of
              Minho. I´ve also experience in business management, namely in
              tourism and short-term rentals, and bitcoin atm operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
