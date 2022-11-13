/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import Section from '../layout/Section'
import { skills } from '../../data/skills'

export type SkillsProps = {
  children?: React.ReactNode
}

const Skills = () => {
  return (
    <Section charKey={'skills'}>
      <div>
        <p
          className='text-4xl font-bold 
          inline border-b-4
           border-pink-600'
        >
          Experience
        </p>
        <p className='py-4'>// These are the tecnologies I´ve worked with</p>
      </div>
      {/* Icons container */}

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
        {skills.map((item, index) => (
          <div
            key={index}
            className='py-5 shadow-md shadow-[#040c16] hover:scale-110 duration-500'
          >
            <Image src={item.image} className='w-20 mx-auto' alt='CSS Icon' />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
