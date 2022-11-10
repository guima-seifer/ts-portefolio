import React, { useState, MouseEvent } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { useEffect } from 'react'
import Image from 'next/image'
import Logo from '../assets/logo192.png'

export type NavBarProps = {
  darkMode?: boolean,
  updateDarkMode: (arg: boolean) => void
}

export const Navbar = ({updateDarkMode} : NavBarProps) => {

  const [nav, setNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => setNav(!nav);

  const changeTheme = (event: MouseEvent<SVGAElement>) => {
    setDarkMode(!darkMode)
    updateDarkMode(!darkMode)
  }

  return (  
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-900 text-gray-200'>
      <div className='mx-8'>
                <Image src={Logo} alt='' style={{ width: '50px' }} />
            
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <BsFillMoonStarsFill onClick={changeTheme} className='mr-2 inline first-letter:cursor-pointer' />
             {darkMode ? 'Dark' : 'Light'}
        </li>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={!nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}
      >
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-teal-900 ml-[-100px] hover:ml-[-10px] duration-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href=''
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

