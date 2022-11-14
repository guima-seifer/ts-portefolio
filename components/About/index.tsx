import React from 'react'
import { NavBarProps } from '../layout/Navbar'
import Section from '../Section'
import TitleSection from '../Section/title'

export type AboutProps = {
  children?: React.ReactNode
  dark?: NavBarProps
}
const About = () => {
  return (
    <Section charKey='about'>
      <div className='grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
        <TitleSection title="About"/>
        </div>
      </div>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
        <div className='text-3xl font-bold'>
          <p>Nice to meet you. Please take a look around.</p>
        </div>
        <div>
          <p>
            I´m developer from Portugal. My academic background is
            Telecommunications and Computer Sciences at the University of Minho.
            I´ve also experience in business management, namely in tourism and
            short-term rentals, and bitcoin atm operation.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
