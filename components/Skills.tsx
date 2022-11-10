/* eslint-disable react/jsx-no-comment-textnodes */
import HTML from '../assets/html.png'
import REACT from '../assets/react.png'
import NODE from '../assets/node.png'
import CSS from '../assets/css.png'
import AWS from '../src/assets/aws.png'
import FIREBASE from '../assets/firebase.png'
import GITHUB from '../assets/github.png'
import MONGO from '../assets/mongo.png'
import TAILWIND from '../assets/tailwind.png'
import Image from 'next/image'
import { NavBarProps } from './Navbar'

export type SkillsProps = {
  children?: React.ReactNode;
  dark?: NavBarProps,
}

const Skills = ({dark}: SkillsProps) => {
  return (
    <div id='skills' className='w-full h-screen bg-white dark:bg-[#0a192f] text-gray-900 dark:text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
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
      </div>
    </div>
  )
}

export default Skills
