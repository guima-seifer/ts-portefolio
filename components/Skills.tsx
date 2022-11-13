/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import { NavBarProps } from './layout/Navbar'
import Section from './layout/Section'

export type SkillsProps = {
  children?: React.ReactNode;
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
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={HTML} className='w-20 mx-auto' alt='HTML Icon' />
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={CSS} className='w-20 mx-auto' alt='CSS Icon' />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={REACT} className='w-20 mx-auto' alt='Reactjs Icon' />
            <p>Reactjs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={TAILWIND} className='w-20 mx-auto' alt='Tailwindcss Icon' />
            <p>Tailwindcss</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={NODE} className='w-20 mx-auto' alt='Nodejs Icon' />
            <p>Nodejs</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={MONGO} className='w-20 mx-auto' alt='Mongodb Icon' />
            <p>Mongodb</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={GITHUB} className='w-20 mx-auto' alt='Github Icon' />
            <p>Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image src={FIREBASE} className='w-20 mx-auto' alt='Firebase Icon' />
            <p>Firebase</p>
          </div>
        </div>
    </Section>

  )
}

export default Skills
